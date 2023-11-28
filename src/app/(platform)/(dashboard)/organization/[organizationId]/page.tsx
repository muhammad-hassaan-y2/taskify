import { Separator } from "@/src/components/ui/separator";
import Info from "./_components/Info";
import BoardList from "./_components/board-list";

const OrganizationIdPage = async () => {

  return (
    <div className="w-full mb-20">
      
       <Info  />
        
        <Separator className="mt-4"/>
        
        <div className="PX-2 MD:PX-4">
          <BoardList />
        </div>
    </div>
  );
};

export default OrganizationIdPage;
