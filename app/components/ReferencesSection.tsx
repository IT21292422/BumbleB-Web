"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";

const references = [
  {
    id: 1,
    citation:
      '[1] P. Dorji, S. Tashi, U. Dorji, K. Tshering, U. Tshomo, and T. Gyeltshen, "Diversity of pollinator species and effect of pollination on strawberry yield and quality," Journal of Agricultural Sciences - Sri Lanka, Sep 2023.',
  },
  {
    id: 2,
    citation:
      "[2] A. Gudowska, A. Cwajna, E. Marja´nska, and D. Moro´n, “Pollinators enhance the production of a superior strawberry – a global review and meta-analysis,” Agriculture, Ecosystems Environment, vol. 362, p.108815, 2024. [Online]. Available: https://www.sciencedirect.com/science/article/pii/S0167880923004747",
  },
  {
    id: 3,
    citation:
      "[3] Y. I. A. W. M. K. M. T. Yoko Nishimoto, Na Lu, “An evaluation of pollination methods for strawberries cultivated in plant factories: robot vs hand,” 2023. [Online]. Available: http://www.maxapress.com/article/doi/10.48130/TIH-2023-0019",
  },
];

export default function ReferencesSection() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter references based on search
  const filteredReferences = references.filter((ref) =>
    ref.citation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            References
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Literature review references supporting the BumbleB project research
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search references..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing {filteredReferences.length} of {references.length}{" "}
              references
            </p>
          </div>
        )}

        {/* References List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Literature References</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-6">
              {" "}
              {filteredReferences.map((ref) => (
                <li key={ref.id} className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 leading-relaxed mb-2 break-words">
                      {ref.citation.includes("[Online]. Available:") ? (
                        <>
                          {ref.citation.split("[Online]. Available:")[0]}
                          [Online]. Available:{" "}
                          <a
                            href={ref.citation
                              .split("[Online]. Available:")[1]
                              .trim()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 hover:underline break-all"
                          >
                            {ref.citation
                              .split("[Online]. Available:")[1]
                              .trim()}
                          </a>
                        </>
                      ) : (
                        ref.citation
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* No Results Message */}
        {filteredReferences.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No references found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms
            </p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Summary */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Reference Summary</h3>
          <p className="text-gray-600">
            Total of <strong>{references.length} references</strong> from
            peer-reviewed journals and conferences supporting the research and
            development of the BumbleB project.
          </p>
        </div>
      </div>
    </section>
  );
}
