
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jobOpenings = [
  {
    title: "Project Manager",
    description:
      "Lead and manage construction projects ensuring timely delivery and quality standards.",
    applyLink: "mailto:careers@dreamtown.com.np?subject=Project Manager Application",
  },
  {
    title: "Site Engineer",
    description:
      "Oversee daily site operations and coordinate with subcontractors and workers.",
    applyLink: "mailto:careers@dreamtown.com.np?subject=Site Engineer Application",
  },
  {
    title: "Architect",
    description:
      "Design innovative and sustainable building plans that align with client needs.",
    applyLink: "mailto:careers@dreamtown.com.np?subject=Architect Application",
  },
  {
    title: "Interior Designer",
    description:
      "Create inspiring interior spaces that blend aesthetics and functionality.",
    applyLink: "mailto:careers@dreamtown.com.np?subject=Interior Designer Application",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <header className="bg-dreamtown-primary text-white py-12 text-center">
          <img
            src="/lovable-uploads/e4f92905-ce67-4bfe-b5f2-14e83bd0d8be.png"
            alt="Dream Town Developers Logo"
            className="mx-auto mb-4 h-24 w-24"
          />
          <h1 className="text-4xl font-bold mb-2 font-heading">
            Join Dream Town Developers
          </h1>
          <p className="text-lg max-w-3xl mx-auto px-4">
            Build the future of Nepal's infrastructure with us! We foster a culture
            of innovation, collaboration, and professional growth.
          </p>
        </header>

        <div className="container py-16">
          {/* Work Culture & Values */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 font-heading text-dreamtown-primary">
              Our Culture & Values
            </h2>
            <p className="mb-4 text-dreamtown-text leading-relaxed">
              At Dream Town Developers, we believe in building more than just structures.
              Our team thrives on integrity, teamwork, innovation, and commitment to
              quality. We embrace diversity and value each employee's growth, ensuring
              a supportive environment where your ideas and skills can flourish.
            </p>
            <p className="text-dreamtown-text leading-relaxed">
              Join us to contribute to meaningful projects that shape Nepal's skyline,
              and grow your career with meaningful mentorship and continuous learning
              opportunities.
            </p>
          </section>

          {/* Job Openings */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 font-heading text-dreamtown-primary">
              Current Job Openings
            </h2>
            <ul className="space-y-8">
              {jobOpenings.map(({ title, description, applyLink }) => (
                <li key={title} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-2xl font-semibold text-dreamtown-accent mb-2 font-heading">{title}</h3>
                  <p className="mb-4 text-dreamtown-text">{description}</p>
                  <a
                    href={applyLink}
                    className="inline-block bg-dreamtown-accent text-white px-4 py-2 rounded-md hover:bg-dreamtown-accent/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Encouragement to Join */}
          <section className="mt-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 font-heading text-dreamtown-primary">
              Ready to Make a Difference?
            </h2>
            <p className="mb-6 text-dreamtown-text max-w-xl mx-auto">
              If you are talented, passionate about building the future, and want to join a
              team dedicated to excellence, Dream Town Developers is the place for you.
              Together, let's build Nepal's infrastructure and dreams.
            </p>
            <a
              href="mailto:careers@dreamtown.com.np?subject=General Career Inquiry"
              className="inline-block bg-dreamtown-primary text-white px-6 py-3 rounded-md hover:bg-dreamtown-primary/90 transition-colors font-semibold"
            >
              Contact Us for Opportunities
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
