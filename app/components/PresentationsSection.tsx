"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Presentation, Download, Eye } from "lucide-react";
import { getDirectDownloadUrl } from "@/lib/utils";

const presentations = [
  {
    id: 1,
    title: "Project Proposal Presentation",
    type: "PPPTX",
    downloadUrl:
      "https://docs.google.com/presentation/d/1DWQIBW68W5KXSCPgJejsDBS8yufoENY0/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
    previewUrl:
      "https://docs.google.com/presentation/d/1DWQIBW68W5KXSCPgJejsDBS8yufoENY0/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
  },
  {
    id: 2,
    title: "Progress Presentation - 1",
    type: "PPTX",
    downloadUrl:
      "https://docs.google.com/presentation/d/1qkDKgHerxQOjRb2TEkNeGu-yQbeSmHqq/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
    previewUrl:
      "https://docs.google.com/presentation/d/1qkDKgHerxQOjRb2TEkNeGu-yQbeSmHqq/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
  },
  {
    id: 3,
    title: "Progress Presentation - 2",
    type: "PPTX",
    downloadUrl:
      "https://docs.google.com/presentation/d/1Qx0XnqVSufPqOWyNmF2hW5R20pQvrtj8/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
    previewUrl:
      "https://docs.google.com/presentation/d/1Qx0XnqVSufPqOWyNmF2hW5R20pQvrtj8/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
  },
  {
    id: 4,
    title: "Final Presentation",
    type: "PPTX",
    downloadUrl:
      "https://docs.google.com/presentation/d/1OM4ypW3s7GDKkOicWVAMmv5ifvmik1g9/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
    previewUrl:
      "https://docs.google.com/presentation/d/1OM4ypW3s7GDKkOicWVAMmv5ifvmik1g9/edit?usp=sharing&ouid=118128141128462587153&rtpof=true&sd=true",
  },
];

export default function PresentationsSection() {
  return (
    <section id="presentations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Presentations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View slides from all project presentations
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {presentations.map((presentation) => (
            <Card
              key={presentation.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Presentation className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {presentation.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{presentation.type}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() =>
                      window.open(presentation.previewUrl, "_blank")
                    }
                    asChild
                  >
                    <a
                      href={presentation.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700"
                    asChild
                  >
                    <a
                      href={getDirectDownloadUrl(presentation.downloadUrl)}
                      download={`${presentation.title}.pptx`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
