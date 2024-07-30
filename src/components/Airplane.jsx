import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const HELIX_SPEED = 6;

export function Airplane(props) {
  const helix = useRef();
  const { nodes, materials } = useGLTF("./models/airplane/model.glb");

  // Log nodes and materials to inspect their structure
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  useFrame((_state, delta) => {
    if (helix.current) {
      helix.current.rotation.x += delta * HELIX_SPEED;
    }
  });

  return (
    <group {...props} dispose={null}>
      {nodes.PUSHILIN_Plane_Circle000 && (
        <mesh
          geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
          material={materials.plane}
        />
      )}
      {nodes.PUSHILIN_Plane_Helix && (
        <mesh
          ref={helix}
          geometry={nodes.PUSHILIN_Plane_Helix.geometry}
          material={materials.plane}
          position={[1.09, 0.23, 0]}
        />
      )}
    </group>
  );
}

useGLTF.preload("./models/airplane/model.glb");
