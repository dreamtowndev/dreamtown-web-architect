import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Briefcase, Handshake } from "lucide-react";

// Chairman photo with descriptive alt text for SEO
const chairman = {
  name: "Bhesh Bahadur Basnet (Rajendra)",
  position: "Chairman",
  photo:
    "/lovable-uploads/d3808885-fa46-43c7-9351-6d94d8a6b8dd.png", // User-uploaded image for SEO
  bio:
    "As the visionary Chairman of Dream Town Developers, Bhesh Bahadur Basnet (Rajendra) leads the company with a focus on integrity, excellence, and transformative growth, guiding our team to set new benchmarks in Nepal’s construction industry."
};

const teamMembers = [
  {
    name: "Khil K.C. (Pradip)",
    position: "Account & Finance Manager",
    photo: "/lovable-uploads/35060a81-2399-4ddc-85cd-c88e988e72aa.png",
    bio: "Expert in managing finances and accounts, ensuring transparency and accuracy for all projects."
  },
  {
    name: "Manish Kumar Banerjee",
    position: "Civil Engineer",
    photo: "/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png",
    bio: "Dedicated civil engineer responsible for robust project execution and technical oversight."
  },
  {
    name: "Noorja Joshi",
    position: "Civil Engineer",
    photo: "/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png",
    bio: "Focused on blending efficiency and sustainability across all engineering projects."
  },
  {
    name: "Santosh Paudel",
    position: "Civil Engineer",
    photo: "/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png",
    bio: "Committed to excellence in civil works and on-site coordination."
  },
  {
    name: "Pratima Dangoriya",
    position: "Civil Engineer",
    photo: "/lovable-uploads/ebb82301-a450-4503-87d6-c4dfc3424011.png",
    bio: "Bringing expertise to structural planning and project management."
  },
  {
    name: "Ullash Ashish Koju",
    position: "Project Manager",
    photo: "/lovable-uploads/1689aeb1-c868-4e4c-a7d4-161348f1f797.png",
    bio: "Managing large-scale projects with a focus on timely delivery and team synergy."
  },
  {
    name: "Manoj Kumar Yadav",
    position: "Project In Charge",
    photo: "/lovable-uploads/2f4ea1ed-4e54-4d0c-bd2b-1f66941b73bd.png",
    bio: "Oversees all aspects of projects to ensure standards and deadlines are met."
  },
  {
    name: "Dipisha Chettri",
    position: "Civil Engineer",
    photo: "/lovable-uploads/1d44cd43-363a-4c37-97cb-420b4ea226aa.png",
    bio: "Ensuring structural stability and quality at every stage of construction."
  },
  {
    name: "Anil Devkota",
    position: "Senior Lab Technician",
    photo: "/lovable-uploads/7ddad583-4725-4e4b-9129-b1f88595dff7.png",
    bio: "Ensures material testing and analysis meet strict quality requirements."
  },
  {
    name: "Ashish Puri",
    position: "Electrical Overseer",
    photo: "/lovable-uploads/9bb79485-d9ec-40de-8e7c-53055dad5a81.png",
    bio: "Expertly manages electrical installations and mechanical systems."
  },
  {
    name: "Bishal Khadgi",
    position: "Vehicle and Equipment In-Charge",
    photo: "/lovable-uploads/6a29df8b-96a3-46d2-94c8-10626993a9ec.png",
    bio: "Keeps all project vehicles and equipment in optimal working order."
  },
  {
    name: "Ramchandra Gautam",
    position: "Procurement In Charge",
    photo: "/lovable-uploads/1e533195-ac2d-4c97-be0c-fc50f2658c96.png",
    bio: "Leads procurement logistics, securing high-quality materials for projects."
  },
  {
    name: "Nagendra Kurmi",
    position: "Surveyor",
    photo: "/lovable-uploads/358c32cc-c7d5-45ca-8397-34772b456d97.png",
    bio: "Responsible for land surveying and accurate project measurements."
  },
  {
    name: "Aishwarya Gurung",
    position: "Office Admin",
    photo: "/lovable-uploads/2ab193c7-3ce3-4da1-b42c-e7ee563cf245.png",
    bio: "Ensures smooth administrative operations and efficient office management."
  },
  {
    name: "Pabitra Giri",
    position: "Accountant",
    photo: "/lovable-uploads/9683c9bf-bd68-4188-b336-994d07e18be9.png",
    bio: "Maintains financial records and assists with budget planning."
  },
  {
    name: "Rojina Raut",
    position: "Accountant",
    photo: "/lovable-uploads/682be92f-f276-4b66-8c30-9188ce288e12.png",
    bio: "Handles accounts, payroll, and vendor management."
  },
  {
    name: "Karun Karki",
    position: "",
    photo: "/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png",
    bio: ""
  },
  {
    name: "Nawadeep Karki",
    position: "",
    photo: "/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png",
    bio: ""
  }
];

const Team: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow bg-white">
      <section className="bg-construction-primary py-16 text-white animate-fade-in">
        <div className="container flex flex-col items-center text-center">
          <Users className="w-10 h-10 mb-3 text-construction-accent" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Meet Our Team</h1>
          <p className="text-lg max-w-2xl">
            United by passion, driven by excellence—our people turn dreams into landmarks across Nepal.
          </p>
        </div>
      </section>

      {/* Chairman Highlight for SEO */}
      <section className="container mt-12 mb-8">
        <article
          className="bg-construction-accent/10 rounded-xl shadow-xl flex flex-col md:flex-row items-center md:items-start p-8 gap-8 border border-construction-accent"
          itemScope
          itemType="https://schema.org/Person"
        >
          <img
            src={chairman.photo}
            alt="Bhesh Bahadur Basnet (Rajendra), Chairman of Dream Town Developers"
            className="w-40 h-40 object-cover rounded-full border-4 border-construction-accent shadow-xl mb-4 md:mb-0"
            itemProp="image"
          />
          <div className="flex-1 text-center md:text-left">
            <h2
              className="text-3xl font-bold text-construction-primary mb-2"
              itemProp="name"
            >
              {chairman.name}
            </h2>
            <span className="block text-lg text-construction-secondary font-semibold mb-2" itemProp="jobTitle">
              {chairman.position}
            </span>
            <p className="text-construction-dark text-base mb-3" itemProp="description">
              {chairman.bio}
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Briefcase className="w-5 h-5 text-construction-secondary" />
              <Handshake className="w-5 h-5 text-construction-accent" />
            </div>
          </div>
        </article>
      </section>

      {/* Team Members */}
      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-construction-muted rounded-xl shadow-lg flex flex-col items-center p-8 transition-transform hover-scale"
              itemScope
              itemType="https://schema.org/Person"
            >
              <img
                src={member.photo}
                alt={`Photo of ${member.name ? member.name : "Team Member"}${member.position ? " - " + member.position : ""} at Dream Town Developers`}
                className="w-32 h-32 object-cover rounded-full border-4 border-construction-accent mb-4 shadow"
                loading="lazy"
                itemProp="image"
              />
              <h3 className="text-xl font-bold text-construction-primary mb-1" itemProp="name">{member.name}</h3>
              {member.position && (
                <span className="text-construction-secondary font-medium mb-2" itemProp="jobTitle">
                  {member.position}
                </span>
              )}
              {member.bio && (
                <p className="text-construction-dark text-center text-base mb-4" itemProp="description">
                  {member.bio}
                </p>
              )}
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-construction-secondary" />
                <Handshake className="w-5 h-5 text-construction-accent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-construction-accent/10 py-12 mt-8">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-construction-primary mb-3">
            Building with Expertise & Heart
          </h2>
          <p className="max-w-2xl mx-auto text-construction-dark text-lg">
            Our team of 200+ talented professionals, including engineers, architects, project managers, and skilled workers, powers Dream Town Developers' reputation for reliability, innovation, and community impact. Every project benefits from their blend of creativity and technical precision—making us a trusted name in Nepal’s construction industry.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Team;
