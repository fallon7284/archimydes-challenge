import React, { useState } from "react";
import StoryRow from "./StoryRow";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { FaSort } from "react-icons/fa";
import "./StoryTable.css";

const StoryList = ({ stories }) => {
  const [category, setCategory] = useState(null);
  const [up, setUp] = useState(false);
  const [filter, setFilter] = useState("all");
  const handleChange = e => {
    setFilter(e.target.value);
  };
  const filterStories = (stories, type) => {
    if (type === "all") {
      return stories;
    } else {
      return stories.filter(story => story.type === type);
    }
  };
  const sort = (stories, category, up) => {
    const values = {
      low: 0,
      mid: 1,
      high: 2
    };
    if (!category) {
      return stories;
    }
    return stories.sort((a, b) => {
      if (up) {
        if (category === "complexity") {
          return values[b[category]] - values[a[category]];
        }
        return b[category] - a[category];
      } else {
        if (category === "complexity") {
          return values[a[category]] - values[b[category]];
        }
        return a[category] - b[category];
      }
    });
  };
  return (
    <table className="story-table">
      <tbody>
        <tr className="header">
          <th
            onClick={() => {
              setCategory("id");
              if (category === "id") {
                setUp(!up);
              }
            }}
          >
            ID
            <FaSort />
          </th>
          <th>Created By</th>
          <th>Summary</th>
          <th>Description</th>
          <th>
            Type
            <select onChange={handleChange} value={filter}>
              <option value="all">All</option>
              <option value="bugfix">Bugfix</option>
              <option value="enhancement">Enhancement</option>
              <option value="development">Development</option>
              <option value="qa">QA</option>
            </select>
          </th>
          <th
            onClick={() => {
              setCategory("complexity");
              if (category === "complexity") {
                setUp(!up);
              }
            }}
          >
            Complexity
            <FaSort />
          </th>
          <th>Estimated Hours</th>
          <th>Cost</th>
        </tr>
        {filterStories(sort(stories.all, category, up), filter).map(story => {
          return <StoryRow key={story.id} story={story} />;
        })}
      </tbody>
    </table>
  );
};

const mapState = state => {
  return {
    stories: state.stories
  };
};

export default connect(mapState)(StoryList);
