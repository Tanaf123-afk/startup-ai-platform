"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Timer, Video, Mic, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SampleInterview() {
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) {
    return <InterviewSimulation />;
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Try a Sample Interview</h1>
          <p className="text-xl text-gray-600">
            Experience our AI-powered interview platform with a quick demo
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Timer className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">10 Seconds Prep Time</h3>
                <p className="text-gray-600">Quick preparation before answering</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">2 Minutes to Answer</h3>
                <p className="text-gray-600">Record your response to one question</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">AI-Powered Feedback</h3>
                <p className="text-gray-600">Instant analysis of your response</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={() => setIsStarted(true)}
          >
            Start Sample Interview
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No sign-up required. Your response will be recorded but not saved.
          </p>
        </div>
      </div>
    </div>
  );
}

function InterviewSimulation() {
  const [stage, setStage] = useState<'prep' | 'recording' | 'feedback'>('prep');
  const [timeLeft, setTimeLeft] = useState(10);
  const [feedback, setFeedback] = useState({
    clarity: 85,
    confidence: 78,
    technicalAccuracy: 92,
    suggestions: [
      "Consider structuring your answer with a clear beginning, middle, and end",
      "Try to include specific examples to support your points"
    ]
  });

  // Simulate the interview flow
  if (stage === 'prep') {
    setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setStage('recording');
      }
    }, 1000);

    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prepare Your Answer</h2>
          <div className="text-6xl font-bold text-blue-600 mb-8">{timeLeft}</div>
          <p className="text-gray-600">Question: "Tell me about a challenging project you worked on and how you overcame obstacles."</p>
        </div>
      </div>
    );
  }

  if (stage === 'recording') {
    // Simulate recording for 5 seconds then show feedback
    setTimeout(() => {
      setStage('feedback');
    }, 5000);

    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">Recording Your Answer</h2>
          <p className="text-gray-600">Speak clearly and confidently</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Your Feedback</h1>
          <p className="text-xl text-gray-600">
            Here's how our AI evaluated your response
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.clarity}%</div>
              <div className="text-gray-600">Clarity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.confidence}%</div>
              <div className="text-gray-600">Confidence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.technicalAccuracy}%</div>
              <div className="text-gray-600">Technical Accuracy</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Suggestions for Improvement</h3>
            {feedback.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-gray-600">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            asChild
          >
            <Link href="/browse">Start Full Interview</Link>
          </Button>
          <p className="text-sm text-gray-500">
            Ready to practice more? Try a full interview session with multiple questions.
          </p>
        </div>
      </div>
    </div>
  );
} 