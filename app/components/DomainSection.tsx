import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Target, Lightbulb, Cog, Cpu } from "lucide-react";

export default function DomainSection() {
  return (
    <section id="domain" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Domain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and development approach for autonomous
            strawberry pollination
          </p>
        </div>

        <Tabs defaultValue="literature" className="w-full">
          <div className="w-full overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto min-w-full lg:grid lg:grid-cols-6 gap-1">
              <TabsTrigger
                value="literature"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Literature Survey
              </TabsTrigger>
              <TabsTrigger
                value="gap"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Research Gap
              </TabsTrigger>
              <TabsTrigger
                value="problem"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Problem
              </TabsTrigger>
              <TabsTrigger
                value="objectives"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Objectives
              </TabsTrigger>
              <TabsTrigger
                value="methodology"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Methodology
              </TabsTrigger>
              <TabsTrigger
                value="technologies"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Technologies
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="literature" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                  Literature Survey
                </CardTitle>
                <CardDescription>
                  Comprehensive review of existing research in agricultural
                  robotics and pollination
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pollination Methods</h4>
                    <p className="text-gray-600">
                      Strawberry pollination in Sri Lanka depends on wind,
                      insects, and manual labor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Self vs Cross Pollination
                    </h4>
                    <p className="text-gray-600">
                      Self-pollination leads to poor fruit set.
                      Cross-pollination improves size and shape.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Insect Pollination vs Hand Pollination
                    </h4>
                    <p className="text-gray-600">
                      Bee populations are declining due to pesticides and
                      climate change. Hand Pollination is effective but
                      time-consuming and expensive.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Robotic Potential</h4>
                    <p className="text-gray-600">
                      Prior research shows robots can pollinate effectively in
                      greenhouses, but lack flexibility for open fields.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gap" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-6 w-6 text-yellow-600" />
                  Research Gap
                </CardTitle>
                <CardDescription>
                  Identified gaps in current agricultural robotics research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">
                      Lack of Open-Field Solutions
                    </h4>
                    <p className="text-gray-600">
                      Existing robotic pollination focuses on controlled
                      environments (Plant Factories with Artificial Lighting -
                      PFALs).
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Sri Lankan Context</h4>
                    <p className="text-gray-600">
                      No affordable, automated pollination systems tailored to
                      local raised bed farms.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Tech Adoption Barriers</h4>
                    <p className="text-gray-600">
                      Low awareness and resources slow down smart farming in Sri
                      Lanka.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="problem" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-yellow-600" />
                  Research Problem
                </CardTitle>
                <CardDescription>
                  Core challenges addressed by the BumbleB project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">
                    Primary Problem Statement
                  </h4>
                  <p className="text-gray-700 mb-4">
                    <strong>
                      How can we develop an autonomous robotic system that
                      efficiently and accurately pollinates strawberry flowers
                      to improve crop yields while reducing dependency on
                      natural pollinators?
                    </strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h5 className="font-medium mb-2">Technical Challenges</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Precise flower detection</li>
                        <li>• Gentle pollination mechanism design</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">
                        Agricultural Challenges
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Declining bee populations</li>
                        <li>• Inconsistent pollination rates</li>
                        <li>• Labor-intensive manual pollination</li>
                        <li>• Seasonal availability of pollinators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="objectives" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                  Research Objectives
                </CardTitle>
                <CardDescription>
                  Specific goals and targets for the BumbleB project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Primary Objectives</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <p className="text-gray-700">
                          Develop computer vision system for strawberry flower
                          detection
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <p className="text-gray-700">
                          Develop a 3D Robotic Arm, to improve flower contact
                          and mimic manual pollination
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <p className="text-gray-700">
                          Create gentle and efficient pollination mechanism.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Secondary Objectives</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <p className="text-gray-700">
                          Implement near real-time monitoring and data
                          collection
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                          5
                        </div>
                        <p className="text-gray-700">
                          Keep it affordable by focusing on low-cost materials
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                          6
                        </div>
                        <p className="text-gray-700">
                          Validate system performance through field testing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methodology" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="h-6 w-6 text-yellow-600" />
                  Methodology
                </CardTitle>
                <CardDescription>
                  Systematic approach and methods used in the project
                  development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-yellow-600">
                          1
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">
                        Research & Analysis
                      </h4>
                      <p className="text-sm text-gray-600">
                        Literature review, requirement analysis, and system
                        design
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-yellow-600">
                          2
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">Development</h4>
                      <p className="text-sm text-gray-600">
                        Hardware design, software development, and system
                        integration
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-yellow-600">
                          3
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">
                        Testing & Validation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Field testing and performance evaluation
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Development Phases</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">Phase 1:</span>
                        <span className="text-gray-600">Rover Development</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">Phase 2:</span>
                        <span className="text-gray-600">
                          Camera and Server Communication
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">Phase 3:</span>
                        <span className="text-gray-600">3D Arm Movement</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">Phase 4:</span>
                        <span className="text-gray-600">
                          System Integration and Testing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technologies" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-yellow-600" />
                  Technologies Used
                </CardTitle>
                <CardDescription>
                  Comprehensive list of technologies and tools implemented in
                  BumbleB
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-yellow-600">
                      Hardware
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• ESP32 With Camera Module (Main Controller)</li>
                      <li>• Linear Actuator</li>
                      <li>• Stepper Motor</li>
                      <li>• Servo Motors</li>
                      <li>• Capacitive Touch Sensor</li>
                      <li>• Haptic Feedback Motor</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">
                      Programming Language and Frameworks
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• C++ </li>
                      <li>• Python Fast API</li>
                      <li>• OpenCV</li>
                      <li>• YOLOv8 Object Detection Model</li>
                      <li>• React Native Expo</li>
                      <li>• Three.js</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Tools</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Git</li>
                      <li>• Docker</li>
                      <li>• PostgreSQL</li>
                      <li>• MongoDB</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
