import Component from '../';
import actions from './actions';

class Example extends Component {
  routes (router) {
    router.route('/')
      .get(this.getExamples)
      .post(this.postExample);

    router.route('/:id')
      .get(this.getSingleExample);

  return router;
  }

  async getExamples (req, res) {
    res.json(await actions.getExamples());
  }

  async getSingleExample (req, res) {
    res.json(await actions.getSingleExample(req.params.id));
  }

  async postExample (req, res) {
    res.json(await actions.postExample(req.body.example));
  }

  componentWillMount () {
    return;
  }

  componentDidMount () {
    return;
  }
}

export default new Example();