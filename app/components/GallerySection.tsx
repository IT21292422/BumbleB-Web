"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Grid3X3,
  Grid2X2,
  LayoutGrid,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/images/rover.png",
    alt: "Rover",
    title: "Rover",
    description:
      "The strawberry pollination rover, BumbleB, designed for autonomous operation in fields",
    category: "Hardware",
    tags: ["rover", "autonomous"],
  },
  {
    id: 2,
    src: "/assets/images/main-controller.png",
    alt: "Main Controller",
    title: "Main Controller",
    description:
      "Main controller of BumbleB, featuring an ESP32 for wireless communication and control",
    category: "Hardware",
    tags: ["rover", "esp32"],
  },
  {
    id: 3,
    src: "/assets/images/3d-arm.png",
    alt: "3D Robotic Arm",
    title: "3D Robotic Arm",
    description:
      "The robotic arm used in the pollination system, designed for three dimensional movement and precise flower targeting",
    category: "Hardware",
    tags: ["rover", "3d", "arm"],
  },
  {
    id: 4,
    src: "/assets/images/pollination-brush.png",
    alt: "Pollination Brush",
    title: "Pollination Brush",
    description: "Tip of the pollinating brush used in the robotic arm",
    category: "Hardware",
    tags: ["rover", "pollination", "brush"],
  },
  {
    id: 5,
    src: "/assets/images/strawberry-field.png",
    alt: "Strawberry Field",
    title: "Strawberry Field",
    description: "A typical strawberry field in Nuwara Eliya, Sri Lanka",
    category: "Testing",
    tags: ["rover", "strawberry", "field"],
  },
  {
    id: 6,
    src: "/assets/images/rover-integrating.png",
    alt: "Rover Integrating",
    title: "Rover Integrating",
    description: "Integrating BumbleB in a strawberry field for testing",
    category: "Testing",
    tags: ["rover", "integrating"],
  },
  {
    id: 7,
    src: "/assets/images/rover-testing.png",
    alt: "Rover Field Testing",
    title: "Rover Field Testing",
    description: "Testing BumbleB in a strawberry field",
    category: "Testing",
    tags: ["rover", "testing"],
  },
  {
    id: 8,
    src: "/assets/images/mobile-app.png",
    alt: "Mobile App",
    title: "Mobile App",
    description:
      "The mobile app allows for controlling the BumbleB rover, monitor the pollination process, and view analytics",
    category: "Mobile",
    tags: ["mobile", "app"],
  },
  {
    id: 9,
    src: "/assets/images/home.jpg",
    alt: "Home Page",
    title: "Home Page",
    description:
      "The Home page of the BumbleB mobile app, providing an overview of the rover's status and control panel to control the rover",
    category: "Mobile",
    tags: ["mobile", "home", "page"],
  },
  {
    id: 10,
    src: "/assets/images/3d-model.jpg",
    alt: "3D Model Visualiztion",
    title: "3D Model Visualization",
    description:
      "The 3D model visualization of the rover, showcasing the current pollination process and the detection of flowers",
    category: "Mobile",
    tags: ["mobile", "3D", "visualization"],
  },
  {
    id: 11,
    src: "/assets/images/analytics.png",
    alt: "Analytics Page",
    title: "Analytics Page",
    description:
      "The Analytics page of the BumbleB mobile app, providing weekly and monthly statistics of the pollination process",
    category: "Mobile",
    tags: ["mobile", "analytics", "weekly", "monthly"],
  },
  {
    id: 12,
    src: "/assets/images/images.png",
    alt: "Images Page",
    title: "Images Page",
    description:
      "The Images page of the BumbleB mobile app, displaying images captured during the pollination process and also the temperature and humidity during the particular time",
    category: "Mobile",
    tags: ["mobile", "analytics", "images", "temperature", "humidity"],
  },
  {
    id: 13,
    src: "/assets/images/pollination-timeline.png",
    alt: "Pollination Timeline Page",
    title: "Pollination Timeline Page",
    description:
      "The Pollination Timeline page of the BumbleB mobile app, displays the list of pollination sessions and the time taken for each session",
    category: "Mobile",
    tags: ["mobile", "timeline"],
  },
  {
    id: 14,
    src: "/assets/images/profile.png",
    alt: "Profile Page",
    title: "Profile Page",
    description:
      "The Profile page of the BumbleB mobile app, displays the basic information of the user and also allow the user to change the Backend URL of the servers to seamlessly switch between cloud deployed server and local server",
    category: "Mobile",
    tags: ["mobile", "profile", "switch", "backend", "url"],
  },
];

const categories = ["All", "Hardware", "Mobile", "Testing"];
const gridSizes = [
  { value: 2, icon: Grid2X2, label: "Large" },
  { value: 3, icon: Grid3X3, label: "Medium" },
  { value: 4, icon: LayoutGrid, label: "Small" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [gridSize, setGridSize] = useState(3);
  const imagesPerPage = 6;

  // Filter images based on search and category
  const filteredImages = galleryImages.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const paginatedImages = filteredImages.slice(
    startIndex,
    startIndex + imagesPerPage
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

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = filteredImages.find(
    (img) => img.id === selectedImage
  );

  // Grid class mapping
  const getGridClass = () => {
    switch (gridSize) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed images of the BumbleB rover, from design concepts
            to field testing
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search images, tags, or descriptions..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Controls Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
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

            {/* Grid Size Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">Grid:</span>
              {gridSizes.map((size) => (
                <Button
                  key={size.value}
                  variant={gridSize === size.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setGridSize(size.value)}
                  className={
                    gridSize === size.value
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : ""
                  }
                  title={size.label}
                >
                  <size.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {paginatedImages.length} of {filteredImages.length} images
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Images Grid */}
        <div className={`grid ${getGridClass()} gap-6 mb-8`}>
          {paginatedImages.map((image) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => openLightbox(image.id)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {image.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {image.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {image.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {image.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{image.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let page;
                if (totalPages <= 7) {
                  page = i + 1;
                } else if (currentPage <= 4) {
                  page = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  page = totalPages - 6 + i;
                } else {
                  page = currentPage - 3 + i;
                }

                return (
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
                );
              })}
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
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No images found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto block"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">
                    {selectedImageData.title}
                  </h3>
                  <Badge variant="secondary">
                    {selectedImageData.category}
                  </Badge>
                </div>
                <p className="text-gray-200 mb-2">
                  {selectedImageData.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedImageData.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-white border-white/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {filteredImages.findIndex((img) => img.id === selectedImage) +
                  1}{" "}
                of {filteredImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
