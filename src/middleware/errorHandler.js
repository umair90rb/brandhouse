export default function errorHandler(err, req, res, next) {
  res.status(500).send({
    message: "Something goes wrong!",
  });
}
