import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { 
  FaArrowLeft, 
  FaGlobe, 
  FaCompass, 
  FaPlus, 
  FaMinus, 
  FaExpand, 
  FaCompress, 
  FaSync, 
  FaMapMarkerAlt, 
  FaPlay, 
  FaPause, 
  FaVolumeUp, 
  FaVolumeMute, 
  FaRedo,
  FaChevronRight,
  FaChevronLeft,
  FaLayerGroup
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const CAMPUS_LOCATIONS = [
  {
    id: "main_entrance",
    title: "AIET Main Entrance",
    titleKn: "ಆಳ್ವಾಸ್ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ ಮುಖ್ಯ ಪ್ರವೇಶ",
    desc: "Grand Entrance Arch & Security Gate",
    descKn: "ಮುಖ್ಯ ಪ್ರವೇಶ ದ್ವಾರ ಮತ್ತು ಭದ್ರತಾ ವ್ಯವಸ್ಥೆ",
    coords: "13.0827° N, 74.9961° E",
    elevation: "84m",
    image: "/videos/tour_thumbnails/main_entrance_360.jpg",
    type: "image",
    hotspots: [
      { id: "main_facade", label: "Academic Block", labelKn: "ಕಟ್ಟಡ", yaw: 0.1, pitch: 0 }
    ]
  },
  {
    id: "main_facade",
    title: "Main Academic Building",
    titleKn: "ಮುಖ್ಯ ತಾಂತ್ರಿಕ ಬ್ಲಾಕ್",
    desc: "Administrative Block & Central Library",
    descKn: "ಆಡಳಿತ ಕಚೇರಿ ಮತ್ತು ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ",
    coords: "13.0831° N, 74.9965° E",
    elevation: "86m",
    image: "/videos/tour_thumbnails/main_facade_360.jpg",
    type: "image",
    hotspots: [
      { id: "courtyard", label: "Central Courtyard", labelKn: "ಕೇಂದ್ರ ಅಂಗಳ", yaw: -0.8, pitch: 0 },
      { id: "main_entrance", label: "Back to Entrance", labelKn: "ಪ್ರವೇಶ ದ್ವಾರಕ್ಕೆ", yaw: 2.2, pitch: 0 }
    ]
  },
  {
    id: "courtyard",
    title: "Central Green Courtyard",
    titleKn: "ಕೇಂದ್ರ ಹಸಿರು ಅಂಗಳ",
    desc: "Lush Green Amphitheatre & Student Plaza",
    descKn: "ಸುಂದರ ಹಸಿರು ಪರಿಸರ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಚಟುವಟಿಕೆ ಕೇಂದ್ರ",
    coords: "13.0835° N, 74.9970° E",
    elevation: "88m",
    image: "/videos/tour_thumbnails/courtyard_360.jpg",
    type: "image",
    hotspots: [
      { id: "dept_corridor", label: "Reception Area", labelKn: "ರಿಸೆಪ್ಷನ್ ಏರಿಯಾ", yaw: 0.5, pitch: 0 },
      { id: "main_facade", label: "Academic Block", labelKn: "ಕಟ್ಟಡ", yaw: -2.5, pitch: 0 }
    ]
  },
  {
    id: "dept_corridor",
    title: "Reception Area",
    titleKn: "ರಿಸೆಪ್ಷನ್ ಏರಿಯಾ",
    desc: "Main Reception & Visitor Welcome Lounge",
    descKn: "ಮುಖ್ಯ ಸ್ವೀಕಾರ ಕೇಂದ್ರ ಮತ್ತು ಸಂದರ್ಶಕರ ಲಾಂಜ್",
    coords: "13.0842° N, 74.9978° E",
    elevation: "90m",
    image: "/videos/tour_thumbnails/dept_corridor_360.jpg",
    type: "image",
    hotspots: [
      { id: "video_tour", label: "360° Motion Tour", labelKn: "ಚಲನಚಿತ್ರ ಪ್ರವಾಸ", yaw: 1.2, pitch: 0.3 },
      { id: "courtyard", label: "Central Courtyard", labelKn: "ಕೇಂದ್ರ ಅಂಗಳ", yaw: -1.8, pitch: 0 }
    ]
  },
  {
    id: "video_tour",
    title: "4K 360° Motion Video Tour",
    titleKn: "4K 360° ಲೈವ್ ಚಲನಚಿತ್ರ ಪ್ರವಾಸ",
    desc: "Full 4K Ultra-HD Motion 360° Cinematic Campus Tour",
    descKn: "ಪೂರ್ಣ 4K ಅಲ್ಟ್ರಾ ಎಚ್‌ಡಿ 360° ಸಿನೆಮ್ಯಾಟಿಕ್ ಕ್ಯಾಂಪಸ್ ಪ್ರವಾಸ",
    coords: "13.0850° N, 74.9988° E",
    elevation: "85m",
    video: "/videos/virtual_tour_360.mp4",
    poster: "/videos/tour_thumbnails/main_entrance_hd.jpg",
    type: "video",
    hotspots: []
  }
];

export default function VirtualTour() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const isKn = lang === 'kn';

  const playerContainerRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const videoRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const sphereMeshRef = useRef(null);
  const hotspotsGroupRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [compassHeading, setCompassHeading] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 768);

  useEffect(() => {
    const handleResizeWindow = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  // Video specific state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const activeLoc = CAMPUS_LOCATIONS[activeLocationIndex];

  // Helper to load texture (Image or Video) onto 360 sphere
  const updateSphereTexture = useCallback((loc) => {
    if (!sphereMeshRef.current) return;

    // Reset camera controls to horizon center view when location changes
    if (controlsRef.current) {
      controlsRef.current.reset();
    }

    if (loc.type === "image") {
      sphereMeshRef.current.rotation.set(0, 0, 0);
      const loader = new THREE.TextureLoader();
      loader.load(loc.image, (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.colorSpace = THREE.SRGBColorSpace;
        sphereMeshRef.current.material.map = texture;
        sphereMeshRef.current.material.needsUpdate = true;
      });
    } else if (loc.type === "video" && videoRef.current) {
      // Ensure video horizon is level and centered straight ahead
      sphereMeshRef.current.rotation.set(0, 0, 0);
      const video = videoRef.current;
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      sphereMeshRef.current.material.map = texture;
      sphereMeshRef.current.material.needsUpdate = true;
    }
  }, []);

  // Update Hotspot Markers in 360 Scene
  const updateHotspotMarkers = useCallback((loc) => {
    if (!hotspotsGroupRef.current) return;

    // Clear existing hotspots
    while (hotspotsGroupRef.current.children.length > 0) {
      const child = hotspotsGroupRef.current.children[0];
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
      hotspotsGroupRef.current.remove(child);
    }

    if (!loc.hotspots || loc.hotspots.length === 0) return;

    loc.hotspots.forEach((hs) => {
      const radius = 420;
      const phi = (90 - hs.pitch) * (Math.PI / 180);
      const theta = hs.yaw;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      // Create glowing ring hotspot
      const ringGeo = new THREE.RingGeometry(12, 18, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffcc00,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(x, y, z);
      ringMesh.lookAt(0, 0, 0);
      ringMesh.userData = { targetId: hs.id };

      // Inner dot
      const dotGeo = new THREE.CircleGeometry(8, 32);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xff5500, side: THREE.DoubleSide });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.set(0, 0, 0.1);
      ringMesh.add(dotMesh);

      hotspotsGroupRef.current.add(ringMesh);
    });
  }, []);

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 450;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0.1);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 360 Inverted Sphere
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereMeshRef.current = sphere;

    // Hotspots Group
    const hotspotsGroup = new THREE.Group();
    scene.add(hotspotsGroup);
    hotspotsGroupRef.current = hotspotsGroup;

    // Orbit Controls for Google Street View Pan/Tilt
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.minDistance = 1;
    controls.maxDistance = 100;
    controls.enablePan = false;
    controls.rotateSpeed = -0.45;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = isAutoRotate;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // Initial Texture & Hotspots setup
    updateSphereTexture(CAMPUS_LOCATIONS[0]);
    updateHotspotMarkers(CAMPUS_LOCATIONS[0]);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();

      // Update compass Heading in degrees
      const azimuth = controls.getAzimuthalAngle();
      const deg = Math.round((-azimuth * (180 / Math.PI) + 360) % 360);
      setCompassHeading(deg);

      renderer.render(scene, camera);
    };
    animate();

    // Handle Container Resize with ResizeObserver & Window Events
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const targetContainer = playerContainerRef.current || container;
      const w = targetContainer.clientWidth || window.innerWidth;
      const h = targetContainer.clientHeight || window.innerHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    if (playerContainerRef.current) {
      resizeObserver.observe(playerContainerRef.current);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [updateSphereTexture, updateHotspotMarkers]);

  // Handle Location Switch
  const switchLocation = (index) => {
    if (index === activeLocationIndex) return;

    const newLoc = CAMPUS_LOCATIONS[index];
    setActiveLocationIndex(index);

    // Reset camera orientation to center view
    if (controlsRef.current) {
      controlsRef.current.reset();
    }

    // Pause video if switching away from video mode
    if (activeLoc.type === "video" && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    // Camera transition zoom pulse
    if (cameraRef.current) {
      const origFov = cameraRef.current.fov;
      cameraRef.current.fov = 95;
      cameraRef.current.updateProjectionMatrix();
      setTimeout(() => {
        if (cameraRef.current) {
          cameraRef.current.fov = origFov;
          cameraRef.current.updateProjectionMatrix();
        }
      }, 300);
    }

    updateSphereTexture(newLoc);
    updateHotspotMarkers(newLoc);
  };

  // Click on 3D Hotspots in 360 View
  const handleCanvasClick = (e) => {
    if (!canvasContainerRef.current || !cameraRef.current || !hotspotsGroupRef.current) return;
    const rect = canvasContainerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(hotspotsGroupRef.current.children, true);

    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj && !obj.userData?.targetId && obj.parent) {
        obj = obj.parent;
      }
      if (obj && obj.userData?.targetId) {
        const targetIdx = CAMPUS_LOCATIONS.findIndex(l => l.id === obj.userData.targetId);
        if (targetIdx !== -1) {
          switchLocation(targetIdx);
        }
      }
    }
  };

  // Zoom Controls
  const handleZoomIn = () => {
    if (!cameraRef.current) return;
    cameraRef.current.fov = Math.max(30, cameraRef.current.fov - 10);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleZoomOut = () => {
    if (!cameraRef.current) return;
    cameraRef.current.fov = Math.min(90, cameraRef.current.fov + 10);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleResetNorth = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleAutoRotate = () => {
    const nextState = !isAutoRotate;
    setIsAutoRotate(nextState);
    if (controlsRef.current) {
      controlsRef.current.autoRotate = nextState;
    }
  };

  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Video Controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const handleFsChange = () => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      setIsFullscreen(isFs);

      const triggerCanvasResize = () => {
        if (cameraRef.current && rendererRef.current) {
          const target = playerContainerRef.current || canvasContainerRef.current;
          if (target) {
            const w = target.clientWidth || window.innerWidth;
            const h = target.clientHeight || window.innerHeight;
            if (w > 0 && h > 0) {
              cameraRef.current.aspect = w / h;
              cameraRef.current.updateProjectionMatrix();
              rendererRef.current.setSize(w, h, false);
            }
          }
        }
      };

      triggerCanvasResize();
      setTimeout(triggerCanvasResize, 50);
      setTimeout(triggerCanvasResize, 200);
      setTimeout(triggerCanvasResize, 500);
    };

    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    window.addEventListener("orientationchange", handleFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
      window.removeEventListener("orientationchange", handleFsChange);
    };
  }, []);

  // Also trigger resize when isFullscreen state updates in React
  useEffect(() => {
    const triggerCanvasResize = () => {
      if (cameraRef.current && rendererRef.current) {
        const target = playerContainerRef.current || canvasContainerRef.current;
        if (target) {
          const w = target.clientWidth || window.innerWidth;
          const h = target.clientHeight || window.innerHeight;
          if (w > 0 && h > 0) {
            cameraRef.current.aspect = w / h;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(w, h, false);
          }
        }
      }
    };

    triggerCanvasResize();
    const t1 = setTimeout(triggerCanvasResize, 50);
    const t2 = setTimeout(triggerCanvasResize, 200);
    const t3 = setTimeout(triggerCanvasResize, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isFullscreen]);

  return (
    <div style={{
      width: "100%",
      maxWidth: "1380px",
      margin: "0 auto",
      padding: isMobile ? "12px 12px 40px 12px" : "20px 24px 60px 24px",
      color: "#ffffff",
      boxSizing: "border-box"
    }}>
      {/* Top Header Actions Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        flexWrap: "wrap",
        gap: "12px"
      }}>
        <button
          type="button"
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, rgba(255, 153, 0, 0.15), rgba(128, 0, 0, 0.25))",
            color: "#ffcc00",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            padding: isMobile ? "7px 14px" : "9px 20px",
            borderRadius: "25px",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #ff9900, #ff5500)";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 153, 0, 0.15), rgba(128, 0, 0, 0.25))";
            e.currentTarget.style.color = "#ffcc00";
          }}
        >
          <FaArrowLeft /> {isKn ? "ಹಿಂದೆ" : "Back"}
        </button>

        {/* Prominent Full Screen 360° Access Button */}
        <button
          type="button"
          onClick={toggleFullscreen}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #ff9900, #ff5500)",
            color: "#000000",
            border: "none",
            padding: isMobile ? "8px 14px" : "10px 20px",
            borderRadius: "20px",
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(255, 153, 0, 0.4)",
            transition: "all 0.25s ease"
          }}
        >
          {isFullscreen ? <FaCompress style={{ fontSize: "14px" }} /> : <FaExpand style={{ fontSize: "14px" }} />}
          {isFullscreen 
            ? (isKn ? "ಪೂರ್ಣ ಪರದೆ ನಿರ್ಗಮಿಸಿ" : "Exit Full Screen") 
            : (isKn ? "ಪೂರ್ಣ ಪರದೆ 360° ವೀಕ್ಷಣೆ" : "FULL SCREEN 360° ACCESS")}
        </button>
      </div>

      {/* Header Title & Street View Badge */}
      <div style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            borderRadius: "20px",
            background: "rgba(255, 153, 0, 0.12)",
            border: "1px solid rgba(255, 153, 0, 0.4)",
            color: "#ffcc00",
            fontSize: isMobile ? "10.5px" : "12px",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: "10px",
            textTransform: "uppercase"
          }}>
            <FaMapMarkerAlt style={{ color: "#ff9900", fontSize: "14px" }} />
            {isKn ? "ಗೂಗಲ್ ಸ್ಟ್ರೀಟ್ ವ್ಯೂ 360° ವರ್ಚುವಲ್ ಮ್ಯಾಪಿಂಗ್" : "GOOGLE STREET VIEW 360° MAPPING"}
          </div>

          <h1 style={{
            fontSize: "clamp(1.6rem, 4.5vw, 2.8rem)",
            fontWeight: "800",
            margin: "0 0 8px 0",
            background: "linear-gradient(135deg, #ffffff 0%, #ffcc00 50%, #ff5500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px"
          }}>
            {isKn ? "ಆಳ್ವಾಸ್ ಇಂಜಿನಿಯರಿಂಗ್ ಕ್ಯಾಂಪಸ್ 360° ಸ್ಟ್ರೀಟ್ ವ್ಯೂ" : "AIET Campus Interactive Street View"}
          </h1>

          <p style={{ color: "#a3a3a3", fontSize: "clamp(0.85rem, 1.8vw, 1rem)", margin: 0, maxWidth: "800px" }}>
            {isKn 
              ? "ಗೂಗಲ್ ಸ್ಟ್ರೀಟ್ ವ್ಯೂ ಮಾದರಿಯಲ್ಲಿ ಕ್ಯಾಂಪಸ್ ಅನ್ನು 360 ಡಿಗ್ರಿ ಸುತ್ತಲೂ ಕಂಟ್ರೋಲ್ ಮಾಡಿ. ಪ್ರತಿಯೊಂದು ವಿಭಾಗ ಮತ್ತು ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಸ್ಥಳ ಬದಲಾಯಿಸಿ ವೀಕ್ಷಿಸಿ."
              : "Explore AIET campus block-by-block with full 360° interactive street view mapping, hotspot navigation, orientation compass, and location switching."}
          </p>
        </div>

        {/* GPS Coordinates Badge */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(135deg, rgba(255, 204, 0, 0.15), rgba(255, 85, 0, 0.15))",
          border: "1px solid rgba(255, 204, 0, 0.5)",
          padding: isMobile ? "8px 14px" : "10px 18px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(255, 153, 0, 0.15)"
        }}>
          <FaGlobe style={{ fontSize: isMobile ? "20px" : "24px", color: "#ffcc00" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#ffffff", letterSpacing: "1px" }}>STREET VIEW 360°</span>
            <span style={{ fontSize: "10px", color: "#ffcc00" }}>{activeLoc.coords}</span>
          </div>
        </div>
      </div>

      {/* Main Google Street View Container */}
      <div 
        ref={playerContainerRef}
        style={
          isFullscreen
            ? { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 99999, background: "#000" }
            : {
                position: "relative",
                width: "100%",
                height: isMobile ? "clamp(420px, 68vh, 600px)" : "clamp(480px, 75vh, 680px)",
                maxHeight: "85vh",
                borderRadius: isMobile ? "16px" : "24px",
                overflow: "hidden",
                border: "2px solid rgba(255, 153, 0, 0.5)",
                background: "#000000",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(255, 153, 0, 0.25)"
              }
        }
      >
        {/* Hidden HTML Video element for video mode */}
        <video
          ref={videoRef}
          src="/videos/virtual_tour_360.mp4"
          poster="/videos/tour_thumbnails/main_entrance_hd.jpg"
          preload="metadata"
          loop
          playsInline
          crossOrigin="anonymous"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          style={{ display: "none" }}
        />

        {/* Three.js Canvas Container */}
        <div 
          ref={canvasContainerRef} 
          onClick={handleCanvasClick}
          style={{ width: "100%", height: "100%", cursor: "grab", position: "relative" }}
          onMouseDown={(e) => { e.currentTarget.style.cursor = "grabbing"; }}
          onMouseUp={(e) => { e.currentTarget.style.cursor = "grab"; }}
        />

        {/* Google Maps Style Top-Left Location Info Card */}
        <div style={{
          position: "absolute",
          top: isMobile ? "10px" : "20px",
          left: isMobile ? "10px" : "20px",
          zIndex: 40,
          background: "rgba(10, 10, 14, 0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 204, 0, 0.4)",
          borderRadius: isMobile ? "10px" : "16px",
          padding: isMobile ? "6px 10px" : "12px 18px",
          maxWidth: isMobile ? "calc(100% - 64px)" : "320px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.7)",
          boxSizing: "border-box"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
            <FaMapMarkerAlt style={{ color: "#ff9900", fontSize: isMobile ? "11px" : "14px" }} />
            <span style={{ fontSize: isMobile ? "9.5px" : "11px", fontWeight: "800", color: "#ffcc00", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              {activeLoc.coords} {!isMobile && `• Elev ${activeLoc.elevation}`}
            </span>
          </div>
          <h2 style={{ fontSize: isMobile ? "13px" : "16px", fontWeight: "800", color: "#ffffff", margin: "0 0 2px 0", lineHeight: 1.2 }}>
            {isKn ? activeLoc.titleKn : activeLoc.title}
          </h2>
          {!isMobile && (
            <p style={{
              fontSize: "12px",
              color: "#a3a3a3",
              margin: 0,
              lineHeight: 1.35
            }}>
              {isKn ? activeLoc.descKn : activeLoc.desc}
            </p>
          )}
        </div>

        {/* Google Maps Style Upper-Right Toolbar & Dynamic Compass */}
        <div style={{
          position: "absolute",
          top: isMobile ? "10px" : "20px",
          right: isMobile ? "10px" : "20px",
          zIndex: 45,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "5px" : "10px"
        }}>
          {/* Dynamic Rotating Compass Dial */}
          <div 
            onClick={handleResetNorth}
            title="Reset North Orientation"
            style={{
              width: isMobile ? "34px" : "48px",
              height: isMobile ? "34px" : "48px",
              borderRadius: "50%",
              background: "rgba(10, 10, 14, 0.88)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(255, 204, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
              transition: "transform 0.2s ease"
            }}
          >
            <div style={{
              transform: `rotate(${compassHeading}deg)`,
              transition: "transform 0.1s linear",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <FaCompass style={{ fontSize: isMobile ? "18px" : "24px", color: "#ff9900" }} />
            </div>
          </div>

          {/* Zoom In & Zoom Out Controls */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            background: "rgba(10, 10, 14, 0.88)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            borderRadius: isMobile ? "8px" : "14px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.6)"
          }}>
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom In (+)"
              aria-label="Zoom In"
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                padding: isMobile ? "6px 8px" : "10px 12px",
                cursor: "pointer",
                fontSize: isMobile ? "11px" : "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FaPlus />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom Out (-)"
              aria-label="Zoom Out"
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                padding: isMobile ? "6px 8px" : "10px 12px",
                cursor: "pointer",
                fontSize: isMobile ? "11px" : "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FaMinus />
            </button>
          </div>

          {/* Auto Rotate Toggle */}
          <button
            type="button"
            onClick={toggleAutoRotate}
            title={isAutoRotate ? "Stop Auto Tour" : "Start Auto Tour"}
            aria-label="Toggle Auto Rotation"
            style={{
              width: isMobile ? "32px" : "40px",
              height: isMobile ? "32px" : "40px",
              borderRadius: isMobile ? "8px" : "12px",
              background: isAutoRotate ? "linear-gradient(135deg, #ff9900, #ff5500)" : "rgba(10, 10, 14, 0.88)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 204, 0, 0.4)",
              color: isAutoRotate ? "#000000" : "#ffcc00",
              cursor: "pointer",
              fontSize: isMobile ? "11px" : "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.6)"
            }}
          >
            <FaSync style={{ animation: isAutoRotate ? "spin 4s linear infinite" : "none" }} />
          </button>

          {/* Fullscreen Toggle Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen Mode" : "Full Screen Mode"}
            aria-label="Toggle Fullscreen Mode"
            style={{
              width: isMobile ? "32px" : "40px",
              height: isMobile ? "32px" : "40px",
              borderRadius: isMobile ? "8px" : "12px",
              background: "linear-gradient(135deg, rgba(255, 153, 0, 0.35), rgba(255, 85, 0, 0.35))",
              backdropFilter: "blur(12px)",
              border: "1.5px solid #ffcc00",
              color: "#ffcc00",
              cursor: "pointer",
              fontSize: isMobile ? "12px" : "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 25px rgba(255, 153, 0, 0.35)"
            }}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>

        {/* Drag Hint Center Overlay (Desktop only to prevent mobile clutter) */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 30,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            color: "#ffcc00",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <FaGlobe />
            {isKn ? "ಮೌಸ್ ಎಳೆಯಿರಿ 360° ನೋಡಲು • ನಕ್ಷೆ ಸ್ಥಳಗಳನ್ನು ಒತ್ತಿ" : "🖱️ Drag mouse to look 360° • Click hotspots to navigate"}
          </div>
        )}

        {/* Video Mode Bar (Only visible when active location is video_tour) */}
        {activeLoc.type === "video" && (
          <div style={{
            position: "absolute",
            bottom: showCarousel ? (isMobile ? "54px" : "110px") : (isMobile ? "8px" : "20px"),
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 45,
            background: "rgba(10, 10, 14, 0.92)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 204, 0, 0.5)",
            borderRadius: isMobile ? "12px" : "20px",
            padding: isMobile ? "5px 10px" : "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "6px" : "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
            width: isMobile ? "calc(100% - 12px)" : "calc(100% - 60px)",
            maxWidth: "600px"
          }}>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              style={{
                background: "linear-gradient(135deg, #ff9900, #ff5500)",
                border: "none",
                borderRadius: "50%",
                width: isMobile ? "28px" : "36px",
                height: isMobile ? "28px" : "36px",
                color: "#000000",
                fontSize: isMobile ? "11px" : "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: "2px" }} />}
            </button>

            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              style={{
                flex: 1,
                height: "5px",
                borderRadius: "4px",
                accentColor: "#ff9900",
                cursor: "pointer"
              }}
            />

            <span style={{ fontSize: isMobile ? "9.5px" : "12px", color: "#ffffff", fontWeight: "600", whiteSpace: "nowrap" }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontSize: isMobile ? "13px" : "16px", flexShrink: 0 }}
            >
              {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        )}

        {/* Google Street View Bottom Carousel (Location Selector Bar) */}
        {showCarousel && (
          <div style={{
            position: "absolute",
            bottom: isMobile ? "8px" : "16px",
            left: isMobile ? "6px" : "50%",
            transform: isMobile ? "none" : "translateX(-50%)",
            zIndex: 40,
            width: isMobile ? "calc(100% - 12px)" : "calc(100% - 32px)",
            maxWidth: "1100px",
            background: "rgba(10, 10, 12, 0.92)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 204, 0, 0.4)",
            borderRadius: isMobile ? "12px" : "20px",
            padding: isMobile ? "5px 6px" : "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "6px" : "12px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.85)",
            boxSizing: "border-box"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              paddingRight: isMobile ? "5px" : "10px",
              borderRight: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffcc00",
              fontSize: isMobile ? "10px" : "12px",
              fontWeight: "700",
              whiteSpace: "nowrap"
            }}>
              <FaLayerGroup /> {!isMobile && (isKn ? "ಸ್ಥಳಗಳು:" : "Locations:")}
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "6px" : "10px",
              flex: 1,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none"
            }}>
              {CAMPUS_LOCATIONS.map((loc, idx) => {
                const isActive = idx === activeLocationIndex;
                return (
                  <div
                    key={loc.id}
                    onClick={() => switchLocation(idx)}
                    style={{
                      flex: "0 0 auto",
                      scrollSnapAlign: "start",
                      display: "flex",
                      alignItems: "center",
                      gap: isMobile ? "5px" : "10px",
                      background: isActive 
                        ? "linear-gradient(135deg, rgba(255, 153, 0, 0.35), rgba(255, 85, 0, 0.35))" 
                        : "rgba(255, 255, 255, 0.06)",
                      border: isActive ? "1.5px solid #ffcc00" : "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: isMobile ? "8px" : "14px",
                      padding: isMobile ? "3px 6px 3px 3px" : "6px 12px 6px 6px",
                      cursor: "pointer",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <div style={{
                      width: isMobile ? "32px" : "42px",
                      height: isMobile ? "24px" : "32px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      background: "#000"
                    }}>
                      <img 
                        src={loc.type === "image" ? loc.image : loc.poster} 
                        alt={loc.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{
                        fontSize: isMobile ? "10px" : "12px",
                        fontWeight: isActive ? "800" : "600",
                        color: isActive ? "#ffcc00" : "#ffffff",
                        whiteSpace: "nowrap"
                      }}>
                        {isKn ? loc.titleKn : loc.title}
                      </span>
                      <span style={{ fontSize: isMobile ? "8.5px" : "10px", color: "#a3a3a3", whiteSpace: "nowrap" }}>
                        {loc.type === "video" ? "🎬 360° Video" : "📷 360° Photo"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Toggle Carousel Bar Button */}
        <button
          type="button"
          onClick={() => setShowCarousel(!showCarousel)}
          title={showCarousel ? "Hide Locations Carousel" : "Show Locations Carousel"}
          style={{
            position: "absolute",
            bottom: showCarousel ? (isMobile ? "54px" : "86px") : (isMobile ? "8px" : "16px"),
            right: isMobile ? "8px" : "20px",
            zIndex: 45,
            background: "rgba(10, 10, 14, 0.92)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(255, 204, 0, 0.5)",
            borderRadius: "8px",
            color: "#ffcc00",
            padding: isMobile ? "2px 6px" : "4px 10px",
            fontSize: isMobile ? "9.5px" : "11px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.6)"
          }}
        >
          <FaLayerGroup /> {showCarousel ? "Hide Bar" : "Locations"}
        </button>
      </div>
    </div>
  );
}