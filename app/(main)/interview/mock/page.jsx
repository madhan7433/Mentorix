import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Quiz from "../_components/quiz"


const MockInterview = () => {
  return (
    <div className="container mx-auto space-y-4 py-6">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href={'/interview'}>
          <Button className="gap-2 pl-0" variant="link">
            <ArrowLeft className="h-4 w-4"/>
            Back to Interview Prepartion
          </Button>
        </Link>
        <div>
          <h1 className="text-6xl font-bold font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600">Mock Interview</h1>
          <p className="text-muted-foreground">Test your knowledge with industry-specific questions</p>
        </div>
      </div>
      <Quiz/>
    </div>
  )
}

export default MockInterview