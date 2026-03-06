import React from "react";
import { useParams } from "react-router-dom";
import RightSide from "./RightSide";
import MidSide from "./MidSide";

export default function CourseDetailedPage() {
  const { courseId } = useParams();

  return (
    <div className="flexgap-6 min-h-screen bg-gray-50">

      {/* LEFT SIDEBAR */}
      <div className="w-[300px]">
        <RightSide courseId={courseId} />
      </div>

      {/* MIDDLE CONTENT */}
      <div className="flex-1 flex justify-center p-6" style={{paddingLeft:"350px", marginTop:"-350px"}}>
        <MidSide courseId={courseId} />
      </div>

    </div>
  );
}