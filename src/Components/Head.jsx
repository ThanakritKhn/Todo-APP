import { useEffect, useState } from "react";
import { Notification, Profile } from "./dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

export const Head = ({ topbar }) => {
  const handleSidebarToggle = () => {
    document.body.classList.toggle("sidebar-toggled");
    document.querySelector(".sidebar").classList.toggle("toggled");

    if (document.querySelector(".sidebar").classList.contains("toggled")) {
      document
        .querySelectorAll(".sidebar .collapse")
        .forEach((collapse) => collapse.collapse("hide"));
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        variant="light"
        bg="white"
        className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
      >
        <Navbar.Brand
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "black",
            fontSize: "20px",
          }}
        >
          <span style={{ marginRight: "auto" }}>
            <i className="bi bi-justify" id="sidebarToggle"></i>
          </span>
          <span style={{ marginLeft: "20px" }}>{topbar}</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end navbar-nav ml-auto">
          <Navbar.Text className="nav-item dropdown no-arrow mx-1">
            <a id="alertsDropdown">
              <i className="bi bi-bell-fill"></i>
              <span className="badge badge-danger badge-counter">2</span>
            </a>
          </Navbar.Text>

          <Navbar.Text>
            <div className="divider d-none d-sm-block"></div>
          </Navbar.Text>

          <Navbar.Text>
            <Dropdown className="nav-item dropdown no-arrow">
              <Dropdown.Toggle variant="etc" id="dropdown-basic">
                <span className="mr-2 d-none d-lg-inline text-gray-900 small">
                  Admin
                </span>
                <Image
                  className="img-profile rounded-circle"
                  style={{ width: "25px" }}
                  src="img/Person.jpg"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                href="#"
              >
                <a className="dropdown-item" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-fill mr-2 text-gray-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  Profile
                </a>
                <NavDropdown.Divider />
                <a className="dropdown-item" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right mr-2 text-gray-600"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Logout
                </a>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
