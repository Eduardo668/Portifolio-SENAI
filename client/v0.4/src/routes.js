import { Routes, Route } from "react-router-dom";
import { SidebarMenu } from "./components/sidebar-menu/Menu";
import { SchoolSubjects } from "./pages/academic-projects/school-subjects";
import { JobsPage } from "./pages/academic-projects/trabalhos/jobs-page";
import { AllTrabalhosTable } from "./pages/create-trabalhos/All-trabalhos-table/all-trabalhos-table";
import { CreateTabalhos } from "./pages/create-trabalhos/create-trabalhos";
import { StudyTimeline } from "./pages/cronograma-de-estudos/cronograma";
import { Home } from "./pages/home/home";
import { PersonalProjects } from "./pages/personal-projects/personal-projects";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cronograma" element={<StudyTimeline />} />
      <Route path="/school-subjects" element={<SchoolSubjects />} />
      <Route
        path={`/${localStorage.getItem("materia")}`}
        element={<JobsPage />}
      />
      <Route
        path={"/root/main/admin/create"}
        element={<CreateTabalhos />}
      />
       <Route
        path={"/root/main/admin/list"}
        element={<AllTrabalhosTable />}
      />
      {/* <Route path="/projects" element={<PersonalProjects />} /> */}

    </Routes>
  );
};
