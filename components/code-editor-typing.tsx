"use client"

import { useState, useEffect } from "react"
import type { JSX } from "react"

interface CodeExample {
  language: string
  code: string
}

const codeExamples: CodeExample[] = [
  {
    language: "React",
    code: `import { useState } from 'react'

export default function Dashboard() {
  const [users, setUsers] = useState([])
  
  const loadUsers = async () => {
    const data = await fetchUsers()
    setUsers(data)
  }
  
  return (
    <div className="container">
      <h1>User Dashboard</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}`,
  },
  {
    language: "Java",
    code: `@Service
public class UserService {
    
    @Autowired
    private UserRepository repository;
    
    public List<User> getAllUsers() {
        return repository.findAll();
    }
    
    public User createUser(UserDTO dto) {
        User user = new User();
        user.setName(dto.getName());
        return repository.save(user);
    }
}`,
  },
  {
    language: "Laravel",
    code: `<?php

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::latest()->paginate(15);
        return response()->json($users);
    }
    
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        
        return response()->json($user, 201);
    }
}`,
  },
]

export function CodeEditorTyping() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentCode = codeExamples[currentIndex].code
    let currentPos = 0

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentPos < currentCode.length) {
          setDisplayedCode(currentCode.substring(0, currentPos + 1))
          currentPos++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setDisplayedCode("")
            setIsTyping(true)
            setCurrentIndex((prev) => (prev + 1) % codeExamples.length)
          }, 2000)
          clearInterval(typingInterval)
        }
      }, 30)

      return () => clearInterval(typingInterval)
    }
  }, [currentIndex, isTyping])

  const renderCodeWithHighlight = (code: string, language: string) => {
    const lines = code.split("\n")

    return lines.map((line, lineIndex) => {
      const tokens: JSX.Element[] = []
      const remaining = line
      let tokenKey = 0

      const addToken = (text: string, color: string) => {
        tokens.push(
          <span key={`${lineIndex}-${tokenKey++}`} className={color}>
            {text}
          </span>,
        )
      }

      if (language === "React") {
        // Keywords
        const keywordRegex = /(import|export|default|const|let|var|async|await|return|from|try|catch|finally|if)/g
        // Functions/Components
        const functionRegex = /(useState|Dashboard|UserCard|console|error|map)/g
        // Strings
        const stringRegex = /(['"`])((?:\\.|(?!\1).)*?)\1/g

        let lastIndex = 0
        const allMatches: Array<{ index: number; length: number; color: string; text: string }> = []

        // Collect all matches
        let match
        while ((match = keywordRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-pink-400", text: match[0] })
        }
        keywordRegex.lastIndex = 0

        while ((match = functionRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-yellow-300", text: match[0] })
        }
        functionRegex.lastIndex = 0

        while ((match = stringRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-green-400", text: match[0] })
        }

        // Sort by position
        allMatches.sort((a, b) => a.index - b.index)

        // Render tokens
        allMatches.forEach((m) => {
          if (m.index > lastIndex) {
            addToken(line.substring(lastIndex, m.index), "text-gray-300")
          }
          addToken(m.text, m.color)
          lastIndex = m.index + m.length
        })

        if (lastIndex < line.length) {
          addToken(line.substring(lastIndex), "text-gray-300")
        }
      } else if (language === "Java") {
        const keywordRegex = /(package|import|public|private|class|new|return|static|void|final)/g
        const annotationRegex = /(@\w+)/g
        const typeRegex =
          /\b(Service|Autowired|List|Optional|User|UserService|UserRepository|EmailService|UserDTO|Long)\b/g
        const stringRegex = /(['"`])((?:\\.|(?!\1).)*?)\1/g

        let lastIndex = 0
        const allMatches: Array<{ index: number; length: number; color: string; text: string }> = []

        let match
        while ((match = keywordRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-pink-400", text: match[0] })
        }
        keywordRegex.lastIndex = 0

        while ((match = annotationRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-yellow-300", text: match[0] })
        }
        annotationRegex.lastIndex = 0

        while ((match = typeRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-[#25ABC4]", text: match[0] })
        }
        typeRegex.lastIndex = 0

        while ((match = stringRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-green-400", text: match[0] })
        }

        allMatches.sort((a, b) => a.index - b.index)

        allMatches.forEach((m) => {
          if (m.index > lastIndex) {
            addToken(line.substring(lastIndex, m.index), "text-gray-300")
          }
          addToken(m.text, m.color)
          lastIndex = m.index + m.length
        })

        if (lastIndex < line.length) {
          addToken(line.substring(lastIndex), "text-gray-300")
        }
      } else if (language === "Laravel") {
        const keywordRegex = /(namespace|use|class|public|function|return|new)/g
        const phpRegex = /(<\?php)/g
        const variableRegex = /(\$\w+)/g
        const typeRegex = /\b(JsonResponse|User|StoreUserRequest|UserController|Controller|Hash)\b/g
        const stringRegex = /(['"`])((?:\\.|(?!\1).)*?)\1/g

        let lastIndex = 0
        const allMatches: Array<{ index: number; length: number; color: string; text: string }> = []

        let match
        while ((match = phpRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-purple-400", text: match[0] })
        }
        phpRegex.lastIndex = 0

        while ((match = keywordRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-pink-400", text: match[0] })
        }
        keywordRegex.lastIndex = 0

        while ((match = variableRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-[#25ABC4]", text: match[0] })
        }
        variableRegex.lastIndex = 0

        while ((match = typeRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-yellow-300", text: match[0] })
        }
        typeRegex.lastIndex = 0

        while ((match = stringRegex.exec(line)) !== null) {
          allMatches.push({ index: match.index, length: match[0].length, color: "text-green-400", text: match[0] })
        }

        allMatches.sort((a, b) => a.index - b.index)

        allMatches.forEach((m) => {
          if (m.index > lastIndex) {
            addToken(line.substring(lastIndex, m.index), "text-gray-300")
          }
          addToken(m.text, m.color)
          lastIndex = m.index + m.length
        })

        if (lastIndex < line.length) {
          addToken(line.substring(lastIndex), "text-gray-300")
        }
      } else {
        tokens.push(
          <span key={`${lineIndex}-0`} className="text-gray-300">
            {line}
          </span>,
        )
      }

      return (
        <div key={lineIndex} className="leading-relaxed">
          {tokens.length > 0 ? tokens : "\u00A0"}
        </div>
      )
    })
  }

  return (
    <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[650px] xl:w-[650px] rounded-2xl bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-4 lg:p-6 xl:p-8 shadow-2xl">
      {/* Window Controls */}
      <div className="flex items-center gap-2 mb-3 lg:mb-4 xl:mb-6">
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500" />
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500" />
        <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500" />
        <span className="ml-3 lg:ml-4 text-[10px] lg:text-xs text-white/60">{codeExamples[currentIndex].language}</span>
      </div>

      {/* Code Content */}
      <div className="pr-2 overflow-hidden">
        <div className="space-y-0.5 lg:space-y-1 font-mono text-[10px] lg:text-xs xl:text-sm whitespace-pre">
          {renderCodeWithHighlight(displayedCode, codeExamples[currentIndex].language)}
          {showCursor && <span className="inline-block w-1.5 lg:w-2 h-3 lg:h-4 bg-[#25ABC4] animate-pulse ml-1" />}
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 h-16 w-16 lg:h-24 lg:w-24 xl:h-32 xl:w-32 rounded-full bg-[#25ABC4]/20 blur-3xl" />
      <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 h-16 w-16 lg:h-24 lg:w-24 xl:h-32 xl:w-32 rounded-full bg-purple-500/20 blur-3xl" />
    </div>
  )
}
