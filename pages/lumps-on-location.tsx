import ComingSoon from "../components/ComingSoon";
import InfiniteCarousel from "../components/InfiniteCarousel";

const IMAGES = [
  "/images/1_baggage_claim.jpg",
  "/images/2_fountain_2.jpg",
  "/images/3_gate_seating.jpg",
  "/images/4_musical_chairs.jpg",
  "/images/5_parking_lot.jpg",
  "/images/6_hallway_ghost.jpg",
  "/images/7_fountain_1.jpg",
  "/images/8_escalator.jpg",
  "/images/9_baggage_claim_seats.jpg",
  "/images/10_quiet_room.jpg",
];

const OnLocation = () => {
  return <InfiniteCarousel images={IMAGES} />;
};

export default OnLocation;
