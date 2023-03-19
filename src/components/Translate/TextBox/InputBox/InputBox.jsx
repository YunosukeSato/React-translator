export default function InputBox() {
  return (
    <>
      <label
        htmlFor="sentence"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <textarea
        className="resize-none block p-9 w-1/2 h-96 text-3xl text-gray-900 bg-gray-50 rounded-lg border border-sky-200 focus:rind-blue-200"
        placeholder="Type to translate..."
      ></textarea>
    </>
  );
}
