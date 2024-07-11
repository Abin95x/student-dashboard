import { assignments } from "@/utils/assignmentData";

const Assignments = () => {
  return (
    <div className="flex-grow p-4 bg-white dark:bg-gray-800 rounded-2xl w-full md:w-1/2">
      <h1 className="text-xl font-normal">Assignments({assignments.length})</h1>
      <div className="mt-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="mb-4 p-4 bg-white dark:bg-gray-700 rounded-xl border">
            <h2 className="text-lg font-medium">{assignment.assignment}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {assignment.date} {assignment.month}, {assignment.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
