"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Search, Filter } from "lucide-react";
import { getDirectDownloadUrl } from "@/lib/utils";

const documents = [
  {
    id: 1,
    title: "Topic Assessment Form (TAF)",
    type: "PDF",
    category: "Documentation",
    downloadUrl:
      "https://drive.google.com/file/d/1vFdMG60kj1LBfG0gfmjOpsilR-tuBgng/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1vFdMG60kj1LBfG0gfmjOpsilR-tuBgng/view?usp=sharing",
  },
  {
    id: 2,
    title: "Rusira Project Proposal Report",
    type: "PDF",
    category: "Proposal",
    downloadUrl:
      "https://drive.google.com/file/d/1V6AodtSdIVzm4YNJEA5YJDbj0XJn_bL_/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1V6AodtSdIVzm4YNJEA5YJDbj0XJn_bL_/view?usp=sharing",
  },
  {
    id: 3,
    title: "Chathupa Project Proposal Report",
    type: "PDF",
    category: "Proposal",
    downloadUrl:
      "https://drive.google.com/file/d/1kftSDS_JtDr2Ma1gFhFV-AHcQ75wCvO-/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1kftSDS_JtDr2Ma1gFhFV-AHcQ75wCvO-/view?usp=sharing",
  },
  {
    id: 4,
    title: "Chamath Project Proposal Report",
    type: "PDF",
    category: "Proposal",
    downloadUrl:
      "https://drive.google.com/file/d/1tK_mzw8euQbHkDg0SXzZveRVMhi0DEJe/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1tK_mzw8euQbHkDg0SXzZveRVMhi0DEJe/view?usp=sharing",
  },
  {
    id: 5,
    title: "Akmal Project Proposal Report",
    type: "PDF",
    category: "Proposal",
    downloadUrl:
      "https://drive.google.com/file/d/1gYT_K2g1jPs4q2e9q-SZohaDVV7R7MEl/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1gYT_K2g1jPs4q2e9q-SZohaDVV7R7MEl/view?usp=sharing",
  },
  {
    id: 6,
    title: "Deployment Report",
    type: "PDF",
    category: "Documentation",
    downloadUrl:
      "https://drive.google.com/file/d/1ESyED0L9f0lbOD3rziP-3AN6G00NCB51/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1ESyED0L9f0lbOD3rziP-3AN6G00NCB51/view?usp=sharing",
  },
  {
    id: 7,
    title: "Akmal Final Project Report",
    type: "PDF",
    category: "Final",
    downloadUrl:
      "https://drive.google.com/file/d/1hkjNAEVrG4Xaxh-9xhd9Bu_c1EsL2kVX/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1hkjNAEVrG4Xaxh-9xhd9Bu_c1EsL2kVX/view?usp=sharing",
  },
  {
    id: 8,
    title: "Chathupa Final Project Report",
    type: "PDF",
    category: "Final",
    downloadUrl:
      "https://drive.google.com/file/d/1edHmZ1bq40MsjN4VCmBjx35xsG2HUuA_/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1edHmZ1bq40MsjN4VCmBjx35xsG2HUuA_/view?usp=sharing",
  },
  {
    id: 9,
    title: "Rusira Final Project Report",
    type: "PDF",
    category: "Final",
    downloadUrl:
      "https://drive.google.com/file/d/1FVeaO8YaJnotdwXyxm7gQ4Fu4BfRN67T/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1FVeaO8YaJnotdwXyxm7gQ4Fu4BfRN67T/view?usp=sharing",
  },
];

const categories = ["All", "Documentation", "Proposal", "Final"];

export default function DocumentsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 6;

  // Filter documents based on search and category
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const paginatedDocuments = filteredDocuments.slice(
    startIndex,
    startIndex + documentsPerPage
  );

  // Reset to first page when filters change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <section id="documents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Documents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all project-related documents and reports
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(category)}
                className={
                  selectedCategory === category
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : ""
                }
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {paginatedDocuments.length} of {filteredDocuments.length}{" "}
            documents
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{doc.type}</Badge>
                    <Badge variant="outline">{doc.category}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(doc.previewUrl, "_blank")}
                    asChild
                  >
                    <a
                      href={doc.previewUrl}
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
                      href={getDirectDownloadUrl(doc.downloadUrl)}
                      download={`${doc.title}.pdf`}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : ""
                    }
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No documents found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
