export default function UrlInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="url" className="text-sm font-medium text-[var(--text)]">
        링크
      </label>
      <input
        id="url"
        name="url"
        type="url"
        required
        placeholder="https://example.com"
        className="field transition-color rounded-[6px] px-3 py-2 text-base"
      />
    </div>
  );
}
