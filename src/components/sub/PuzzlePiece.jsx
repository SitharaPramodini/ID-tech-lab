/**
 * The brand's jigsaw piece, echoing the puzzle cutout in the IDTechLabs logo.
 * Colour comes from `currentColor`, so callers set it with a text-* class.
 */
const PIECE_PATH =
  "M18 18 H40 C40 6 60 6 60 18 H82 V40 C94 40 94 60 82 60 V82 H60 C60 70 40 70 40 82 H18 Z";

const PuzzlePiece = ({ className = "", outlined = false, strokeWidth = 5 }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d={PIECE_PATH}
      fill={outlined ? "none" : "currentColor"}
      stroke={outlined ? "currentColor" : "none"}
      strokeWidth={outlined ? strokeWidth : 0}
      strokeLinejoin="round"
    />
  </svg>
);

export default PuzzlePiece;
