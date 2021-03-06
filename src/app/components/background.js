import * as THREE from "three";
import {Canvas} from '@react-three/fiber';
import { Extrude, Center } from "@react-three/drei";
import React from "react";

function Background () {

    const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
    const SIDE = 10;

    function Block(props) {

        const shape = React.useMemo(() => {
            const _shape = new THREE.Shape();

            _shape.moveTo(0, 0);
            _shape.lineTo(SIDE, 0);
            _shape.lineTo(SIDE, SIDE * 2);
            _shape.lineTo(0, SIDE * 2);
            _shape.lineTo(0, SIDE * 3);
            _shape.lineTo(-SIDE, SIDE * 3);
            _shape.lineTo(-SIDE, SIDE);
            _shape.lineTo(0, SIDE);

            return _shape;
        }, []);

        return (
            <>
            <Extrude args={[shape, extrudeSettings]} {...props}>
                <meshPhysicalMaterial
                flatShading
                color="#3E64FF"
                thickness={SIDE}
                roughness={0.4}
                clearcoat={1}
                clearcoatRoughness={1}
                transmission={0.8}
                ior={1.25}
                attenuationTint="#fff"
                attenuationDistance={0}
                />
            </Extrude>
            </>
        );
    }

    return(

        <Canvas dpr={window.devicePixelRatio} camera={{ position: new THREE.Vector3(8, 5, 40) }}>
            <color attach="background" args={["#06092c"]} />
            <pointLight position={[-20, 10, 25]} />
            <Center>
                <Block />
            </Center>
        </Canvas>

    )
};

export default Background;