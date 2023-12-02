import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/dropzone";

function Dashboard() {
  const { userId } = auth();

  return (
    <div>
      <Dropzone />
    </div>
  );
}

export default Dashboard;
