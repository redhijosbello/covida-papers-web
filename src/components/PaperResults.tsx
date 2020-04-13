import React from "react";
import {PaperData} from "../dataClasses/PaperData";
import ListGroup from "react-bootstrap/ListGroup";

interface Results {
  papers: PaperData[];
}

const PaperResults: React.FC<Results> = (props) => {
  return <ListGroup className="mx-3">
    {
      props.papers.map((paper: PaperData) => {
        return <ListGroup.Item key={paper.title}>
          <a target="_blank" rel="noopener noreferrer"
             href={paper.link}>{paper.title}</a>
        </ListGroup.Item>
      })
    }
  </ListGroup>
};

export default PaperResults;
