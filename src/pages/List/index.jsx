import { useEffect, useState, useCallback } from "react";
import api from '../../services/api';
import Frame from '../../components/Frame';
import Pagination from '../../components/Pagination';
import { Container, Added, Wrapper, Footer } from './styles';

const List = () => {

  const [frame, setFrame] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [framePerPage] = useState(8);

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

  return (
    <Container>
      <Frame frames={frame} />
      <Footer>
        <Pagination
          postsPerPage={framePerPage}
          totalPosts={frame.length}
          paginate={paginate}
        />
      </Footer>
    </Container>
  )
}

export default List;