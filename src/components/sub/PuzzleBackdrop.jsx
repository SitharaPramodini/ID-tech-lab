import PuzzlePiece from "./PuzzlePiece";

/**
 * Section backdrop: a faint interlocking jigsaw lattice plus a few drifting
 * pieces. The float class is passed in so each section keeps its own existing
 * GSAP timeline; rotation lives on the inner piece so GSAP's transform on the
 * wrapper does not clobber it.
 */
const PIECES = [
  { position: "top-24 left-4 sm:left-10", size: "w-16 sm:w-24 lg:w-28 aspect-square", tone: "text-brand-500/10", spin: "-rotate-12" },
  { position: "top-52 right-5 sm:right-16", size: "w-12 sm:w-16 lg:w-20 aspect-square", tone: "text-brand-400/10", spin: "rotate-45" },
  { position: "bottom-48 left-1/4", size: "w-20 sm:w-28 lg:w-36 aspect-square", tone: "text-brand-700/10", spin: "rotate-6" },
  { position: "bottom-24 right-10 sm:right-28", size: "w-14 sm:w-20 lg:w-24 aspect-square", tone: "text-brand-600/10", spin: "-rotate-[30deg]" },
];

const PuzzleBackdrop = ({ floatClass = "floating-element" }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="puzzle-grid absolute inset-0" />
    {PIECES.map((piece, index) => (
      <div key={index} className={`${floatClass} absolute ${piece.position}`}>
        <PuzzlePiece className={`${piece.size} ${piece.tone} ${piece.spin}`} />
      </div>
    ))}
  </div>
);

export default PuzzleBackdrop;
