
import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";

import "../Styles/ViewPost.css";
import { format } from "date-fns";
import {getPosts, getusers } from "../../Services/GetUser.service";
import { timeStamptoDate } from "../../Services/Utility";
import { database } from "../../firebase";
import { useNavigate } from "react-router-dom";


function ViewUsercom() {
  const [usecollection, setusercollection] = useState([]);
  const [showview, setShowview] = useState(false);
  const handleCloseview = () => setShowview(false);
  const [search, setsearch] = useState("");
  const handleShowview = () => setShowview(true);
  const navigation = useNavigate()
  const [item, setitem] = useState([]);
  const [currentPage, setcurrentpage] = useState(1);
  const recordpage = 20;
  const lastIndex = currentPage * recordpage;
  const firstIndex = lastIndex - recordpage;
  const records = usecollection.slice(firstIndex, lastIndex);
  const npage = Math.ceil(usecollection.length / recordpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getusers("", (result) => {
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
      handleShowview();
    },
    []
  );

  const handleDeletePost = async()=>{
    const confirm =  window.confirm("Are you sure you want to delete this post")
    if (confirm){
      await database.collection("posts").doc(`${item.id}`).delete()
      handleCloseview()
      return
    }
    
  }

  const handleBack = ()=>{
    navigation("/auth/dashboard/admin")
  }

  return (
    <div>
      <div className="giftcardocne">
        <h1>User Register</h1>
        <div className="girckahdicbd">
          <button onClick={handleBack}>Back</button>
          <button className="ms-1">{usecollection.length} Users</button>

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
                  <th className="hidetable">Created</th>
                  <th className="hidetable">Name</th>
                  <th className="hidetable">Phone</th>
                  <th className="hidetable">Role</th>
                  <th>Status</th>
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
                          value.lastname
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        } else if (
                          value.firstname
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        } else if (
                            value.phone
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
                              {item.created
                                ? format(item.created, "dd/MM/yyyy hh:mm a")
                                : ""}
                            </td>
                            <td>{item.firstname} {item.lastname}</td>
                            <td className="hidetable">{item.phone}</td>
                            <td className="hidetable">{item.permission}</td>
                            <td>
                              {item.active === true ? "active" : "Suspended"}
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

export default ViewUsercom;
