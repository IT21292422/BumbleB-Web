import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const milestones = [
  {
    id: 1,
    title: "Project Proposal",
    description:
      "Presented to a panel of judges in order to provide an overview of the proposed research.",
    date: "6th August 2024",
    status: "completed",
    details: ["Marks Allocated - 6%"],
  },
  {
    id: 2,
    title: "Progress Presenation - 1",
    description:
      "Evaluation of 50% completion of the proposed solution by a panel of judges.",
    date: "4th December 2024",
    status: "completed",
    details: ["Marks Allocated - 15%"],
  },
  {
    id: 3,
    title: "Progress Presentation - 2",
    description:
      "Evaluation of 90% completion of the proposed solution by a panel of judges.",
    date: "18th March 2025",
    status: "completed",
    details: ["Marks Allocated - 18%"],
  },
  {
    id: 4,
    title: "Final Presentation & Viva",
    description: "Final evaluation of the completed product.",
    date: "27th May 2025",
    status: "in-progress",
    details: ["Marks Allocated - 20%"],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "in-progress":
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case "pending":
      return <AlertCircle className="h-5 w-5 text-gray-400" />;
    default:
      return <AlertCircle className="h-5 w-5 text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in-progress":
      return "bg-yellow-100 text-yellow-800";
    case "pending":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function MilestonesSection() {
  return (
    <section id="milestones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our progress through key assessments and development phases
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-yellow-200"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center z-10">
                  {getStatusIcon(milestone.status)}
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          {milestone.title}
                        </CardTitle>
                        <Badge className={getStatusColor(milestone.status)}>
                          {milestone.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-gray-500">
                        {milestone.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        {milestone.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Details:</h4>
                        <ul className="space-y-1">
                          {milestone.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
