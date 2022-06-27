import { useEffect, useState, useCallback } from "react";
import api from '../../services/api';
import Frame from '../../components/Frame';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import { Container, Added, Wrapper, Footer } from './styles';

const List = () => {

  const navigate = useNavigate();

  const [frame, setFrame] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [framePerPage, setFramePerPage] = useState(8);

  const loadFrame = useCallback(async () => {
    await api.get('/video/list').then((res) => {
      setFrame(res.data);
      setFlag(true);
    }).catch((err) => {
      console.log(err);
    });
  }, [frame, flag]);

  useEffect(() => {
    loadFrame();
  }, []);

  const indexOfLastFrame = currentPage * framePerPage;
  const indexOfFirstFrame = indexOfLastFrame - framePerPage;
  const currentPages = frame.slice(indexOfFirstFrame, indexOfLastFrame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  const prevPage = () => this.setState({ currentPage: currentPage - 1 });

  return (
    <Container>
      {/* <Added onClick={navigate('/create')}/> */}
      <Wrapper>
        {flag ? frame.slice(0).reverse().map((frameData, index) => {
          return (
            <Frame
              key={index}
              embed={frameData.embed}
              subtitle={frameData.subtitle}
              title={frameData.title}
            />
          )
        }) : ""}
      </Wrapper>

      <Footer>
        <Pagination postsPerPage={framePerPage} totalPosts={frame.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </Footer>
    </Container>
  )
}

export default List;