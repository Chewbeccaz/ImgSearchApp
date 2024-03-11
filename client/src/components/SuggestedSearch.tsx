interface SuggestedSearchProps {
  suggestedSearch: string;
  onSuggestedSearch: () => void;
}

export const SuggestedSearch = ({
  suggestedSearch,
  onSuggestedSearch,
}: SuggestedSearchProps) => {
  return (
    <p>
      Menade du:{" "}
      <span
        style={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={onSuggestedSearch}>
        {suggestedSearch}
      </span>
      ?
    </p>
  );
};
