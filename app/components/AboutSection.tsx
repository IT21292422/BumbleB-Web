import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Rusira Thamuditha",
    role: "Group Leader",
    education: "BSc in Information Technology",
    image: "/assets/images/team/rusira.png",
    github: "https://github.com/it21294198",
    linkedin: "https://www.linkedin.com/in/rusira-thamuditha",
    email: "thamudithaaa@gmail.com",
  },
  {
    id: 2,
    name: "Chathupa Wickramarathne",
    role: "Group Member",
    education: "BSc in Information Technology",
    image: "/assets/images/team/chathupa.jpg",
    github: "https://github.com/chatwick",
    linkedin: "https://www.linkedin.com/in/chathupa-wickramarathne",
    email: "c.wick400@gmail.com",
  },
  {
    id: 3,
    name: "Chamath Wickrama Arachchi",
    role: "Group Member",
    education: "BSc in Information Technology",
    image: "/assets/images/team/chamath.jpg",
    github: "https://github.com/chamath-shanaka",
    linkedin: "https://www.linkedin.com/in/chamath-wickrama-arachchi",
    email: "chamathshanaka19@gmail.com",
  },
  {
    id: 4,
    name: "Akmal Alavi",
    role: "Group Member",
    education: "BSc in Information Technology",
    image: "/assets/images/team/akmal.png",
    github: "https://github.com/iamakmal",
    linkedin: "https://www.linkedin.com/in/akmal-alavi/",
    email: "m.akmalalavi@gmail.com",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind the BumbleB project, bringing
            together expertise in robotics, computer vision, and agricultural
            engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-yellow-100"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-yellow-600 font-medium">
                  {member.role}
                </CardDescription>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <GraduationCap className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {member.education}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We are committed to developing innovative solutions that address
            real-world challenges in agriculture. Through the BumbleB project,
            we aim to contribute to sustainable farming practices while
            advancing the field of agricultural robotics. Our interdisciplinary
            approach combines cutting-edge technology with practical
            agricultural needs.
          </p>
        </div>
      </div>
    </section>
  );
}
