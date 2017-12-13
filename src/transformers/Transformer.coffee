
export default class Transformer
  @fetchCollection: (items) ->
    items.map (item) -> this.fetch(item)

  @sendCollection: (items) ->
    items.map (item) -> this.send(item)
