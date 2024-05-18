'use client'
import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";

import "../Styles/ViewPost.css";

import { format } from "date-fns";
import { getPosts } from "../../Services/GetUser.service";
import { timeStamptoDate } from "../../Services/Utility";
import MediaViewer from "../module/MediaView";
import { database } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";

function ViewPost() {
  const [usecollection, setusercollection] = useState([]);
  const [showview, setShowview] = useState(false);
  const handleCloseview = () => setShowview(false);
  const [search, setsearch] = useState("");
  const handleShowview = () => setShowview(true);
  const navigate = useNavigate();
  const [item, setitem] = useState([]);
  const [currentPage, setcurrentpage] = useState(1);
  const recordpage = 20;
  const lastIndex = currentPage * recordpage;
  const firstIndex = lastIndex - recordpage;
  const records = usecollection.slice(firstIndex, lastIndex);
  const npage = Math.ceil(usecollection.length / recordpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    getPosts("", (result) => {
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


  const handleDeletePost = async() => {
    const d = query(collection(database, 'posts'), where('id', '==', item.id));
    const docSnap = await getDocs(d);
    docSnap.forEach((doc) => {
      console.log(doc.data())
      deleteDoc(doc.ref);
    });

    handleCloseview()
  return
  }

  // const handleDeletePost = async()=>{
  //   console.log('delete pos')
  //   const confirm =  window.confirm("Are you sure you want to delete this post")
  //   if (confirm){
  //     await database.collection("posts").doc(`${item.id}`).delete()
  //     handleCloseview()
  //     return
  //   }
    
  // }

  const handleBack = ()=>{
    navigate("/auth/dashboard/admin")
  }

  return (
    <div>

      <Modal
        show={showview}
        onHide={handleCloseview}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="modalheader">
          Post Details
        </Modal.Header>
        <Modal.Body>
          <div className="biewproductcontinaer">
            <div className="productineofnfjf">
              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Tittle</strong>
                </div>
                <div className="productonfprnf">{item.title}</div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Category</strong>
                </div>
                <div className="productonfprnf">{item.category}</div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>status</strong>
                </div>
                <div className="productonfprnf">
                  {item.is_active === true ? "Active" : "Deleted"}
                </div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Reference</strong>
                </div>
                <div className="productonfprnf">{item.blogid}</div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Date</strong>
                </div>
                <div className="productonfprnf">
                  {item.createdAt
                    ? format(item.createdAt, "dd/MM/yyyy hh:mm a")
                    : ""}
                </div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Date</strong>
                </div>
                <div className="productonfprnf">
                  <MediaViewer
                    mediaUrl={item.imageUrl}
                    mediaType={item.fileType}
                  />
                </div>
              </div>

              <div className="productdetaund">
                <div className="producttitle">
                  <strong>Content</strong>
                </div>
                <div
                  className="productonfprnf"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>

              {/* <div className="productdetaund">
                <div className="producttitle">
                  <strong>Comment</strong>
                </div>
                <div className="productonfprnf">
                  {item.comment.length > 0 ? (
                    <>
                      {item.comment.map((comment) => {
                        return <> {comment}</>;
                      })}
                    </>
                  ) : (
                    <>No Comment</>
                  )}
                </div>
              </div> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeletePost}>
            Delete Post
          </Button>

          <Button variant="secondary" onClick={handleCloseview}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="giftcardocne">
        <h1>Post Register</h1>
        <div className="girckahdicbd">
          <button onClick={handleBack}>Back</button>
          <button className="ms-1">{usecollection.length} Post</button>

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
                  <th>Post ID</th>
                  <th className="hidetable">Category</th>
                  <th className="hidetable">Publish By</th>
                  <th>Status</th>
                  <th>More..</th>
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
                          value.blogid
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        } else if (
                          value.category
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
                            <td>{item.blogid}</td>
                            <td className="hidetable">{item.category}</td>
                            <td className="hidetable">{item.PublishBy}</td>
                            <td>
                              {item.is_active === true ? "active" : "Deleted"}
                            </td>
                            <td>
                              <ButtonGroup aria-label="Basic example">
                                <Button
                                  variant="success"
                                  onClick={Togglemodalview(item)}
                                >
                                  View
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

export default ViewPost;
