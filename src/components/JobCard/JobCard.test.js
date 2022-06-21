import { render, screen } from "@testing-library/react";
import JobCard from "./JobCard";

const testData = {
  jobId: "5775d8e18a488e6c5bb08333",
  jobTitle: {
    name: "Construction General Helper",
    imageUrl: "https://imgs.swipejobs.com/js/job-category/construction-1.jpg",
  },
  company: {
    name: "Steve Smith Construction",
    address: {
      formattedAddress: "430 Smith St, Chicago, IL 60654, USA",
      zoneId: "America/Chicago",
    },
    reportTo: {
      name: "Judy Smith",
      phone: "2130010012",
    },
  },
  wagePerHourInCents: 950,
  milesToTravel: 3.4,
  shifts: [
    {
      startDate: "2019-09-04T21:00:00Z",
      endDate: "2019-09-05T05:00:00Z",
    },
  ],
  branch: "Downtown",
  branchPhoneNumber: "2531233322",
};

test("jobCard renders", () => {
  render(
    <JobCard
      jobData={testData}
      workerID="7f90df6e-b832-44e2-b624-3143d428001f"
    />
  );
  expect(screen.getByTestId("jobcard")).not.toBeEmptyDOMElement();
});




