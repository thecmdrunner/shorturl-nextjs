import projects from "../../../links.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process the request
    const { project } = req.query;

    // Exit if query exceeds 50 characters for security.
    if (String(project).length > 50) {
      return res.status(400).json({ response: "ERROR 400: Query too long." });
    }

    console.log(`API query made: ${project}`);

    // Get the link for redirect
    const projectLink = projects[project];

    // Check whether project entry exists, or is not "undefined"
    const projectNotFound = projectLink !== undefined ? false : true;

    // Determine response status code.
    // setting status code 200 does not redirect, even when using res.redirect()
    const responseCode = !projectNotFound ? 307 : 404;

    // Check whether project entry exists,
    // and return a response accordingly.
    if (!projectNotFound) {
      //  Redirect to project link
      console.log(`Project found! Redirecting to: ${projectLink}`);
      return res.redirect(responseCode, projects[project]);
    } else {
      // Send a helpful response
      console.log("NOT found!");

      return res.status(responseCode).setHeader("Content-Type", "text/html")
        .send(`
      <div style="font-family: monospace; display: flex; flex-direction: column">
        <h1>Hello, this route is only meant for URL redirects.</h1>
        <h2>You probably want to be redirected to a project URL.</h2>
        <h2>If you are here by mistake, check to see if the URL is correct.</h2>
        <h2>
        <a href="https://github.com/thegamerhat">See this project README</a> to get the correct link.
        </h2>
      </div>`);
    }
  } else {
    // Handle any other HTTP method
    return res
      .status(400)
      .json({ response: "ERROR 400: BAD REQUEST. Only GET method allowed." });
  }
}

// Not needed: But alternate ways of doing this:

// const projectsArray = Object.getOwnPropertyNames(projects);
// const projectExists = projectsArray.includes(project);
