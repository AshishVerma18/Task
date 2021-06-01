 import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import TableSortLabel from "@material-ui/core/TableSortLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const sortedResult = (rowArray, comparator) => {
  const stablizedRowArray = rowArray.map((el, index) => [el, index]);
  stablizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stablizedRowArray.map((el) => el[0]);
};

const NewsTable = (props) => {
  console.log(props);
  const item = useSelector((state) => state.allItem.items);

  const inputE1 = useRef("");
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState(false);
  const [row, setRow] = useState(item);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("author");
  const classes = useStyles();
  console.log("items2", item);
  let pageHandler = (e, nextPage) => {
    setPage(nextPage);
  };
  const rowHandler = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSorting = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };
  const handleSort = (property) => (event) => {
    handleSorting(event, property);
  };
  // const handleSortDate =  ()=>{
  //   let dates=item.map((newDate)=>{
  //     return (newDate.publishedAt).toLocaleString();
  //   })
  //   dates.sort((date1, date2) => {
  //     date1 = date1.split('-').reverse().join('-');
  //     date2 = date2.split('-').reverse().join('-');
  //     if (date1 < date2) {
  //         return -1;
  //     } else if (date1 > date2) {
  //         return 1;
  //     } else {
  //         return 0;
  //     }
  // });
  // }

  //   var a1 = new Date(a).toString();
  //   var b1 = new Date(b).toString();
  // if(a1[0]<b[0])
  // return 1;
  // else if(a1[0]<b1[0])
  // return -1;
  // else
  // return 0;
  // }

  const getSearchTerm = () => {
    setSearched(true);
    props.searchKeyWord(inputE1.current.value);
  };

  return (
    <>
      <input
        style={{
          width: "100%",
          position: "center",
          display: "flex",
          padding: "5px",
          margin: "5px",
        }}
        type="text"
        placeholder="Search News"
        value={props.term}
        ref={inputE1}
        onChange={getSearchTerm}
      />
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            {!searched ? (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell key="image">Image</TableCell>
                    <TableCell key="source">Source</TableCell>
                    <TableCell key="author">
                      <TableSortLabel
                        active={valueToOrderBy === "author"}
                        direction={
                          valueToOrderBy === "author" ? orderDirection : "asc"
                        }
                        onClick={handleSort("author")}
                      >
                        Author
                      </TableSortLabel>
                    </TableCell>
                    <TableCell key="title">
                      <TableSortLabel
                        active={valueToOrderBy === "title"}
                        direction={
                          valueToOrderBy === "title" ? orderDirection : "asc"
                        }
                        onClick={handleSort("title")}
                      >
                        Title
                      </TableSortLabel>
                    </TableCell>
                    <TableCell key="date">
                      <TableSortLabel
                        active={valueToOrderBy === "date"}
                        direction={
                          valueToOrderBy === "date" ? orderDirection : "asc"
                        }
                        onClick={handleSort("date")} //{handleSortDate}
                      >
                        Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell key="url">
                      <TableSortLabel
                        active={valueToOrderBy === "url"}
                        direction={
                          valueToOrderBy === "url" ? orderDirection : "asc"
                        }
                        onClick={handleSort("url")}
                      >
                        URL
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedResult(
                    props.items,
                    getComparator(orderDirection, valueToOrderBy)
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((news, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <img
                              src={news.urlToImage}
                              alt="news"
                              height="40"
                              width="50"
                            />
                          </TableCell>
                          <TableCell>{news.source.name}</TableCell>
                          <TableCell>{news.author}</TableCell>
                          <TableCell>{news.title}</TableCell>
                          <TableCell>{news.publishedAt}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              color="inherit"
                              href={news.url}
                              target="_blank"
                            >
                              Read
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </>
            ) : (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell key="title">
                      <TableSortLabel
                        active={valueToOrderBy === "title"}
                        direction={
                          valueToOrderBy === "title" ? orderDirection : "asc"
                        }
                        onClick={handleSort("title")}
                      >
                        Title
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={valueToOrderBy === "description"}
                        direction={
                          valueToOrderBy === "description"
                            ? orderDirection
                            : "asc"
                        }
                        onClick={handleSort("description")}
                      >
                        Description
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedResult(
                    props.items,
                    getComparator(orderDirection, valueToOrderBy)
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((news, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{news.title}</TableCell>
                          <TableCell>{news.description}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 25]}
          count={item.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={pageHandler}
          onChangeRowsPerPage={rowHandler}
        />
      </Container>
    </>
  );
};
export default NewsTable;
