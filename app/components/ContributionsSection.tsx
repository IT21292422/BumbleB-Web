import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const componentContributions = [
  {
    id: 1,
    componentTitle: "Robotic pollination Arm",
    componentImage: "/assets/images/3d-arm.png",
    teamMember: {
      name: "Rusira Thamuditha",
      role: "Group Leader",
      avatar: "/assets/images/team/rusira.png",
    },
    description:
      "Developed the 3D robotic arm for precise pollination of strawberry flowers",
  },
  {
    id: 2,
    componentTitle: "Mobile rover body",
    componentImage: "/assets/images/chathupa-contribution.png",
    teamMember: {
      name: "Chathupa Wickramarathne",
      role: "Group Member",
      avatar: "/assets/images/team/chathupa.jpg",
    },
    description:
      "Developed the software and electronic components of the mobile rover",
  },
  {
    id: 3,
    componentTitle: "Asynchronous Scheduling Algorithm",
    componentImage: "/assets/images/chamath-contribution.png",
    teamMember: {
      name: "Chamath Wickrama Arachchi",
      role: "Group Member",
      avatar: "/assets/images/team/chamath.jpg",
    },
    description:
      "Developed a custom asynchronous scheduler to handle and distribute the request traffic so that the services don’t get overloaded",
  },
  {
    id: 4,
    componentTitle: "Mobile App and 3D Visualization",
    componentImage: "/assets/images/3d-contribution.png",
    teamMember: {
      name: "Akmal Alavi",
      role: "Group Member",
      avatar: "/assets/images/team/akmal.png",
    },
    description:
      "Developed the mobile application for remote control and monitoring of the BumbleB rover",
  },
];

export default function ContributionsSection() {
  return (
    <section id="contributions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Component Contributions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key components of BumbleB and the team members
            responsible for their development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {componentContributions.map((component) => (
            <Card
              key={component.id}
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Component Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={component.componentImage || "/placeholder.svg"}
                  alt={component.componentTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {component.componentTitle}
                </CardTitle>
                <CardDescription className="text-sm">
                  {component.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 mt-auto">
                {/* Team Member */}
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg mt-4">
                  <img
                    src={component.teamMember.avatar || "/placeholder.svg"}
                    alt={component.teamMember.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {component.teamMember.name}
                    </h4>
                    <p className="text-xs text-gray-600 truncate">
                      {component.teamMember.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
