import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const projectData = [
  {
    title: "Spa Treatment Project",
    description: "A group designed full-stack MERN application. ",
    screenshot:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png",
    deployedLink: "www.google.com",
    repoLink: "https://github.com/AliceBryer/Spa-Retreat-Project",
  },
  {
    title: "My Valuable Pet (MVP)",
    description:
      "A group full-stack application using node.js, express.js and handlebars.js.",
    screenshot:
      "https://github.com/ss12932/mvp-pet-app/raw/main/public/images/UI1.png",
    deployedLink: "https://mvp-pet-app.herokuapp.com",
    repoLink: "https://github.com/ss12932/mvp-pet-app",
  },
  {
    title: "Work Day Scheduler",
    description:
      "A calendar app which uses local storage for scheduling your work day so you never miss a meeting again.",
    screenshot:
      "https://github.com/AliceBryer/Work-Day-Scheduler/raw/main/Assets/screenshot%20of%20application2.jpg",
    deployedLink: "https://alicebryer.github.io/Professional-Portfolio/",

    repoLink: "https://github.com/AliceBryer/Work-Day-Scheduler",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application which sources information using API fetch requests.",
    screenshot:
      "https://github.com/AliceBryer/Weather-dashboard/raw/main/Assets/Images/Screenshot%20of%20application.jpg",
    deployedLink: "https://alicebryer.github.io/Weather-dashboard/",

    repoLink: "https://github.com/AliceBryer/Weather-dashboard",
  },
  {
    title: "README Generator",
    description:
      "A application which uses Node.js and inquirer to generate a professional README.",
    screenshot:
      "https://github.com/AliceBryer/Professional-README-Generator/raw/main/Screenshots/Screenshot%20of%20application.jpg",
    deployedLink:
      "https://drive.google.com/file/d/1RSVYYIoIn9P_ht2uGHOLijR4w5ZTRtmL/view",

    repoLink: "https://github.com/AliceBryer/Professional-README-Generator",
  },
  {
    title: "React Portfolio",
    description: "My React Portfolio which you are currently viewing.",
    screenshot:
      "https://github.com/AliceBryer/Professional-README-Generator/raw/main/Screenshots/Screenshot%20of%20application.jpg",
    deployedLink: "www.google.co.uk",

    repoLink: "https://github.com/AliceBryer/react-portfolio-alice-bryer",
  },
];

const card = () => {
  const projectCard = projectData.map((item) => {
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.screenshot}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href={item.deployedLink}> Deployed Link</a>{" "}
            </Button>
            <Button size="small">
              <a href={item.repoLink}>Github Repo Link</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div>{projectCard}</div>;
};

export default card;
