import React from "react";
import {PaperData} from "../dataClasses/PaperData";
import ListGroup from "react-bootstrap/ListGroup";

interface Results {
  papers: PaperData[];
}

const PaperResults: React.FC<Results> = (props) => {
  return <ListGroup>
    {
      props.papers.map((paper: PaperData) => {
        return <ListGroup.Item key={paper.title}>
          <a target="_blank" rel="noopener noreferrer"
             href={paper.url}>{paper.title}</a>
        </ListGroup.Item>
      })
    }
  </ListGroup>
};

export default PaperResults;
