class FileInputs {
  constructor(selector) {
    this.inputs = document.querySelectorAll(selector);

    [].forEach.call(this.inputs, (input) => {
      input.addEventListener("change", (event) => {
        this.writeFilePath(input, event.target.value);
      });
    });
  }

  writeFilePath(input, filePath) {
    const fileName = this._extractFilename(filePath);
    const label = input.nextElementSibling;
    label.innerHTML = fileName;
  }

  _extractFilename(path) {
    if (path.substr(0, 12) == "C:\\fakepath\\") return path.substr(12); // modern browser
    let x;
    x = path.lastIndexOf("/");
    if (x >= 0)
      // Unix-based path
      return path.substr(x + 1);
    x = path.lastIndexOf("\\");
    if (x >= 0)
      // Windows-based path
      return path.substr(x + 1);
    return path; // just the file name
  }
}

export { FileInputs };
