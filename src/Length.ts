type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends any> = 'length' extends keyof T ? T['length'] : never

type teslaLength = Length<tesla>
type spaceXLength = Length<spaceX> 