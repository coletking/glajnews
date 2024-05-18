'use client'
import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";

import "../Styles/ViewPost.css";

import { format } from "date-fns";
import { getMessages, getPosts } from "../../Services/GetUser.service";
import { timeStamptoDate } from "../../Services/Utility";
import MediaViewer from "../module/MediaView";
import { database } from "../../firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Support() {
  const [usecollection, setusercollection] = useState([]);
  const [showview, setShowview] = useState(false);
  const handleCloseview = () => setShowview(false);
  const [search, setsearch] = useState("");
  const handleShowview = () => setShowview(true);
  const [item, setitem] = useState([]);
  const [currentPage, setcurrentpage] = useState(1);
  const recordpage = 20;
  const lastIndex = currentPage * recordpage;
  const firstIndex = lastIndex - recordpage;
  const records = usecollection.slice(firstIndex, lastIndex);
  const npage = Math.ceil(usecollection.length / recordpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
 const navigate = useNavigate()
  useEffect(() => {
    getMessages("", (result) => {
      setusercollection(result);
    });
  }, []);

  const prepage = () => {
    if (currentPage !== 1) {
      setcurrentpage(currentPage - 1);
    }
  };

  const Nextpage = () => {
    if (currentPage !== npage) {
      setcurrentpage(currentPage + 1);
    }
  };

  const changecurrentPage = (id) => {
    setcurrentpage(id);
  };

  const Togglemodalview = useCallback(
    (item) => () => {
      setitem(item);
      handleDeletePost(item.id)
    },
    []
  );

  const handleDeletePost = async(id)=>{
    const confirm =  window.confirm("Are you sure you want to delete this post")
    if (confirm){
        await deleteDoc(doc(database, "contact", id))
        window.alert("successful")
    }
    
  }

  const handleBack = ()=>{
    navigate("/auth/dashboard/admin")
  }

  return (
    <div>


      <div className="giftcardocne">
        <h1>Message Register</h1>
        <div className="girckahdicbd">
          <button onClick={handleBack}>Back</button>
          <button className="ms-1">{usecollection.length} Message</button>

          <Form.Control
            type="text"
            placeholder="Search by Name"
            className="w-25 ms-1"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        <div className="cardshowarea">
          <div className="cardvaljsjs">
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th className="hidetable">Date</th>
                  <th className="hidetable">message</th>
                  <th className="hidetable">Sender Name</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <>No Data Found</>
                ) : (
                  <>
                    {records
                      .filter((value) => {
                        if (value === "") {
                          return value;
                        } else if (
                          value.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((item, id) => {
                        const d = timeStamptoDate(item);
                        return (
                          <tr key={id}>
                            <td>{id + 1}</td>

                            <td className="hidetable">
                              {item.createdAt
                                ? format(item.createdAt, "dd/MM/yyyy hh:mm a")
                                : ""}
                            </td>
                            <td>{item.message}</td>
                            <td className="hidetable">{item.name}</td>
                            <td className="hidetable">{item.is_seen ? "Read" : "unRead"}</td>
                            <td>
                              <ButtonGroup aria-label="Basic example">
                                <Button
                                  variant="success"
                                  onClick={Togglemodalview(item)}
                                >
                                  Delete
                                </Button>
                              </ButtonGroup>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}
              </tbody>
            </table>
            <nav>
              <ul className="pageination">
                <li className="page-item">
                  <span className="page-link" onClick={prepage}>
                    Prev
                  </span>
                </li>
                {numbers.slice(0, 10).map((n, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        currentPage === n ? "activenumber" : "page-item"
                      }
                    >
                      <span
                        className="page-link"
                        onClick={() => changecurrentPage(n)}
                      >
                        {n < 1 ? 1 : n}
                      </span>
                    </li>
                  );
                })}

                <li className="page-item">
                  <span className="page-link" onClick={Nextpage}>
                    Next
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
