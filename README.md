# My GitHub Action

This is an example GitHub Action that echoes a message.

## Usage

To use this action in your workflow, add a step in your YAML file like this:

```yaml
name: Example workflow
on: [push]
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Run My GitHub Action
      uses: your-username/my-github-action@v1.0.0
      with:
        message: 'Hello from my GitHub Action!'