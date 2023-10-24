import {
  Breadcrumb,
  Layout,
  Button,
  Modal,
  Form,
  Input,
  Menu,
  Dropdown,
} from 'antd';
import 'antd/dist/antd.css';
import './HeaderProject.css';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import {
  DownOutlined,
  CarOutlined,
  UnlockOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import React from 'react';
import { FaCar } from 'react-icons/fa';
import CurrentUserContext from '../../Share/Context/CurrentUserContext';
import Cookies from 'universal-cookie';
import styles from './Header.module.css';
