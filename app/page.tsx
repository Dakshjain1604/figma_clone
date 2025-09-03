"use client"
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import {useRef,useEffect} from 'react';
import NavBar from "@/components/NavBar";
import RightSideBar from "@/components/RightSideBar";
import  fabric from "fabric";
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";

export default function Page() {
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const fabricRef=useRef<fabric.Canvas | null>(null);
  const isDrawing=useRef(false);
  const shapeRef=useRef<fabric.Object | null>(null);
  const selectedShapeRef=useRef<string | null>('rectangle');

  useEffect(() => {
    if (!fabricRef.current) {
      const canvas = initializeFabric({ canvasRef, fabricRef });
      if (!canvas) return;
  
      canvas.on("mouse:down", (options: any) => {
        handleCanvasMouseDown({
          options,
          canvas:canvas as any,
          isDrawing,
          shapeRef:shapeRef as any,
          selectedShapeRef,
        });
      });
  
      window.addEventListener("resize", () => {
        handleResize({ canvas: fabricRef.current });
      });
    }
  
    return () => {
      fabricRef.current?.dispose();
      fabricRef.current = null;
    };
  }, []);
  


  return (
    <main className="h-screen overflow-hidden">
        {/* <h1 className="text-white text-8xl">figma clone </h1> */}
        <NavBar/>
        <section className="flex h-full flex-row">
          <LeftSidebar/>
          <Live canvasRef={canvasRef}/>
          <RightSideBar/>
        </section>
    </main>
  );
}