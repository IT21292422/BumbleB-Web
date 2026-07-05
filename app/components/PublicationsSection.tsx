"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PublicationsSection() {
  const [expandedAbstracts, setExpandedAbstracts] = useState<number[]>([]);

  const publications = [
    {
      id: 1,
      title:
        "Towards Autonomous Raised Bed Flower Pollination with IoT and Robotics - An Autonomous Strawberry Flower Pollinating Rover",
      authors:
        "Rusira Thamuditha Karunarathna, Chathupa Wickramarathne , Mohamed Alavi Mohamed Akmal, Chamath Shanaka Wickrama Arachchi, Kapila Dissanayaka, Bhagya Nathali Silva and Ruchire Eranga Wijesinghe",
      type: "journal",
      name: "Engineering Proceedings",
      volume: "118",
      issue: "1",
      year: 2025,
      url: "https://www.mdpi.com/2673-4591/118/1/55",
      doi: "https://doi.org/10.3390/ECSA-12-26572",
      abstract:
        "Strawberries, a high-value crop with growing demand, face increasing challenges from labour shortages, declining pollinator populations, and the limitations of inconsistent manual pollination. This paper presents an IoT-enabled robotic system designed to automate strawberry pollination in open-field raised-bed environments with minimal human intervention. The system consists of a mobile rover equipped with an ESP32-CAM for image capture and a robotic arm mounted on an Arduino Uno, capable of controlled X, Y, and Z positioning to perform targeted pollination. Images of strawberry beds are transmitted to a locally deployed server, which uses a lightweight detection model to identify flowers. System components communicate asynchronously via HTTP and I2C protocols, and the onboard event-driven architecture enables responsive behaviour while minimizing RAM and power usage, which is an essential requirement for low-cost, field-deployable robotics. The server also manages multi-rover scheduling through a custom priority queue designed for low-end hardware. In controlled lo0ad tests, the scheduler improved average response time by 6.9% and handled 2.4% more requests compared to the default queueing system, while maintaining stability. Preliminary field tests demonstrate successful flower identification and reliable arm positioning under real-world conditions. Although full system yield measurements are ongoing, current results validate the core design’s functional feasibility. Unlike previous systems that focus on greenhouse deployments or simpler navigation approaches, this work emphasizes modularity, affordability, and adaptability for small and medium farms, particularly in resource-constrained agricultural regions such as Sri Lanka. This study presents a promising step toward autonomous and scalable pollination systems that integrate embedded systems, robotics, and IoT for practical use in precision agriculture.",
    },
    {
      id: 2,
      title: "Towards Autonomous Strawberry Pollination via IoT and Robotics",
      authors:
        "Rusira Thamuditha Karunarathna, Chathupa Wickramarathne , Mohamed Alavi Mohamed Akmal, Chamath Shanaka Wickrama Arachchi, Kapila Dissanayaka and Bhagya Nathali Silva",
      type: "conference",
      name: "2025 7th International Conference on Advancements in Computing (ICAC)",
      year: 2025,
      url: "https://ieeexplore.ieee.org/document/11361500",
      doi: "10.1109/ICAC69156.2025.11361500",
      abstract:
        "Strawberries, a high-value crop with growing demand, face increasing challenges due to labour shortages, declining natural pollinator populations, and inconsistent manual pollination. To address these obstacles, this paper introduces an IoT-enabled robotic system designed to automate strawberry pollination with minimal human intervention. The system consists of a mobile rover with a three-dimensional robotic arm for precise flower detection and positioning, and a high-performance server to handle image processing and task coordination. The rover uses an event-driven software architecture that enables responsive, real-time behaviour and keeps power and memory usage to a minimum, which is crucial to field-deployable robotics. The onboard camera modules capture images of the strawberry bed and send them to an image processing server, which returns flower coordinates. T he arm then performs targeted pollination based on the flower positions. Communication between system components is asynchronous and modular to allow scalable integration and future system extensions. Preliminary field tests conducted in open-field raised beds demonstrate t he system's functional viability and reliable operational behaviour under real-world conditions. Designed with affordability and practicality in mind, this work contributes a novel and cost-effective approach to precision agriculture, particularly for small and medium farms where traditional pollination methods are either unreliable, labour-intensive, or too costly to sustain.",
    },
  ];

  const toggleAbstract = (id: number) => {
    setExpandedAbstracts((current) =>
      current.includes(id)
        ? current.filter((abstractId) => abstractId !== id)
        : [...current, id],
    );
  };

  const getAbstractPreview = (abstract: string) => {
    const previewLength = 300;

    return abstract.length > previewLength
      ? `${abstract.slice(0, previewLength).trimEnd()}...`
      : abstract;
  };

  return (
    <section
      id="publications"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic papers and research publications showcasing our innovations
            in autonomous flower pollination and agricultural robotics.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={pub.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Publication Number and Title */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100">
                      <span className="text-sm font-bold text-yellow-700">
                        {index + 1}
                      </span>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                  </div>
                </div>
              </div>

              {/* Publication Details */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">
                      {pub.type === "journal" ? "Journal:" : "Conference:"}{" "}
                    </span>
                    <span className="text-gray-600">{pub.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Year: </span>
                    <span className="text-gray-600">{pub.year}</span>
                  </div>
                  {pub.volume && pub.issue && (
                    <div>
                      <span className="font-semibold text-gray-700">
                        Volume/Issue:{" "}
                      </span>
                      <span className="text-gray-600">
                        {pub.volume}({pub.issue})
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-gray-700">DOI: </span>
                    <span className="text-gray-600 font-mono">{pub.doi}</span>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="px-6 py-4">
                <h4 className="font-semibold text-gray-700 mb-2">Abstract:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expandedAbstracts.includes(pub.id)
                    ? pub.abstract
                    : getAbstractPreview(pub.abstract)}
                </p>
                {pub.abstract.length > 300 && (
                  <Button
                    type="button"
                    variant="link"
                    className="mt-2 h-auto p-0 text-sm font-medium text-yellow-700 hover:text-yellow-800"
                    onClick={() => toggleAbstract(pub.id)}
                  >
                    {expandedAbstracts.includes(pub.id)
                      ? "Show less"
                      : "Show more"}
                  </Button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white"
                  onClick={() => window.open(pub.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Publication
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
