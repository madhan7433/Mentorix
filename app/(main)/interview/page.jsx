import { getAssessments } from "@/actions/interview"
import StatsCards from "./_components/stats-cards";
import QuizList from "./_components/quiz-list";
import PerformanceChart from "./_components/performance-chart";

const InterviewPage = async () => {

  const assessments = await getAssessments();


  return (
    <div>
        <h1 className="text-6xl font-bold font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 mb-5">
          Interview Preparation
        </h1>

        <div className="space-y-6">
          <StatsCards assessments={assessments}/>
          <PerformanceChart assessments={assessments}/>
          <QuizList assessments={assessments}/>
        </div>
    </div>
  )
}

export default InterviewPage;