function Banana() {
  return (
    <div className="max-w-screen-md min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-8">
        The <code>banana</code> problem
      </h1>
      <div className="bg-slate-800 p-4 rounded-md text-white">
        <pre>('b' + 'a' + + 'a' + 'a').toLowerCase()</pre>
      </div>
      <div className="mt-8">
        <h3 className="font-bold">Output:</h3>
        <p className="mt-2">banana</p>
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Explanation:</h3>
        <p className="mt-2">
          <code>'b' + 'a' + + 'a' + 'a'</code> is evaluated as{' '}
          <code>'b' + 'a' + NaN + 'a'</code> which is <code>'baNaNa'</code>.
        </p>
        <p className="mt-2">
          <code>NaN</code> is a special value in JavaScript that means "Not a
          Number".
        </p>
      </div>
    </div>
  );
}

export default Banana;
