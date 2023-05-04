# Maori Fine Crafts

This website is a demo simulating an online shope selling authentic Maori handmade crafts from New Zealand.

The site implements backend-as-a-service (BaaS) based on Supabase. The branch [firebase](https://github.com/josecarlosgt/nz-maori-crafts/tree/firebase) contains an implementation of BaaS based on Firebase version 9.7.0.

Supbase uses [PostgreSQL](https://www.postgresql.org/), one of the most popular open-source relational databases. The following link provides access to the data model used by the Maori handicrafts site.

- [Data model](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Maori%20Shop-%20Shopping%20Cart.drawio#R7V1bc9o4FP41zLQ7kwwEzOUxkKTJLmlSSGfbp46wBVZrLFcWAfLr98iWbLC42BtuxZ7pxTqWjqRzPumTjmVTqnbGs08MefYjtbBTuipbs1L1pnR1VWlVavCfkMxDSbNqhIIRI5bMFAv65A1LYVlKJ8TC%2FlJGTqnDibcsNKnrYpMvyRBjdLqcbUid5Vo9NMKaoG8iR5f%2BSyxuy14Y5Vh%2Bj8nIVjVXyvLOGKnMUuDbyKLTBVH1tlTtMEp5eDWedbAjjKfsEpa7W3M3ahjDLk9T4Prnxc97%2B55dsJ%2BoW%2FdZAw38C1FAqHlFzkT2%2BJlRawKWDBvN58oS0H5PXHI0EKK2zxHj0mHVMgjABRwRFzMQVIK04yDPJ0H2UGITx%2BqiOZ1wpUil2kMyw1Yv9JfIC67rgjKRFMqHoLwvGyNuI4eMXLg2ofeixjbDPrSli3wuc9h87MhL3VTSeq%2BYcTxbEEnTfcJ0jDmbQxZ5ty69KGFcVV6dxqCoNKXMXgDEVU0KkQTiKFId%2BwoupLuyuK6quW6zz3oCfW2bMvImPOVIyy76MUhPydhBLsAaWQlRmwbDOPAHcZwOdahwtktdrPlbZLIY9V4QG2EuBR4lLg8MYbThD5imU740Sga0tQPpSpyGPyI74x3q%2BpwBroQODO6dYuHiNqeeVOrgodLPpOHF9YByTsdrEbB5OGzHhQJCShxU9waDmj6C%2F1kLBLAAJ8jpwVSJ3JETui2YOVHsthW%2BXWntyMJJ0ycHKwV7Dp1g8rOJZWEYuO2pTTjue8gUmaZAHtuG7OZBsN1hCx6qZnSQVBZbLbM25MAs5SIOQ2jiWr7m9aid7wCCoQEB8kMhlzePjAc1WYd52z54nbijbliyngCMcSqAma0f4cZOAZRK3SEQVC8YJRWjlPfJKPWjM0ojPQwOM39giyh9e6aTempvnT2dNDUUmAxDldYPxMUujIxh2KCxx99OnV1OAi%2F5Y5NWwSbHZ5PWsdlEKc4jm7RSe%2Bvc2aRa0VDgojEOJMy0Ecsxh6RHSe44pKqHJwsOOTiHVNIGO%2FdHIhlinWdGItX07jp7EtFDnRb2TUY8Tqgr9iR4tv65xdkTSQak5I5IavputiCSwxOJcWwiqWXYlJ4ZkURDoCASQ9%2BTkrE4CJB3CsmAkdxRiKFvYQsKOTyFNI9NIUaGPemZUYiR%2FtjM2VOIviMVA9svBQ%2Fcj42II1JIBozkj0L0DWxBIQenkOhs6fEoRD%2BqkxsKqaV219lTiH7cxmPEFI0F2yNeyzGJpEdJ%2FkhEP57TmfjgQsw2k0kpf2e2%2F%2Beh7eiBx%2B5n%2FiIOmW4FkGWyaKQGxqkc2jb0MGSODm0bRSRSmUId9iwObe8IMLlbDtSLsOTO95TZGeXoh7br%2BY1K1ouoZGQKPSopj9nl%2B7lWBojkjkBaGYJRBYHsi0COfk67leHlrzMjkGgEFATS0oNLxVs%2F78BL7tikoW9oO4CHHw8cjzfTSu7Ck1E4MnN40tgXCTSKzeTOw5PRiPhzwpMNfTOZo%2FBko9hPRqbQ95NFePI9gMnfeqA48rLz3WV2Rjl6eLKhBxnujs0oB9tfNoozL5EpVp15Cb439%2BOPIZaTAEr%2BiCTDV2kKItkXkRw9TNnQD9DkiEjSh5XPnkj0EzSmPAVXMEkmpOSOSZrFA68TYJLjf1Simd8nXs3iiVdkiuKJ107xkj86SfFtGmyNsIpFgqUJn%2Fewg8RXS27jO2HEMuSTytWyn7BrXYuv2UPytveGGX2hj8idKxaK742Raz0F4GKix1gxEdTK5t8WE99F4tJQyZvZ4s0bRVeB%2BjviKNLTASODnz6dMBNvsJP68i5XvLaWS%2BQuWBgt7dQUfXZ%2F6TmZErLA2K94qcEbEPcs2DbGspH4%2BLvRSqAs7LssFSNMU1RPKKolFYW20RTtDKopgrEnBNVKNqjiGeHfFq4XSkEqLiQS83fDWZ1J3g7nRgHn%2FcC5teplmrojyNEGq9RHPPBwKAG6dJeQXv89ET%2B90R4g89coQOCFGdLzdbB9JILSQwUyp1J5gziCLOrHToZQBnBgAz%2FVYZ0AGdyB7y1UDZ0Law%2BLPyLYSUCJe8A%2FMRkacvHWeN%2BGxUBcQO%2BAkKxovt48VWDAkpKE3sTID46ILg1l2D%2FQXzixaFmxjpFLkVL4oE2mXoLFzcVVec0qZNVqZXki0A5krB2t6dcl6tVb9S7wil1Io7Zi8NX3tQtprfoiURLEnynH%2FkZ0eJr3E2h9mXtLKgYrwKEpiQQvAt3lsUS872GTDInQV7ZC9TxULwfDM%2FX5iOH%2Bl24q7Vqbe91%2BoMUhZljLh%2F7EGyAff3xnD4aw1aZTgVWYRun0wsGvYY%2BwOWHAdaIqqPyjgFlcu2%2FTiSOCSgMc5BVz4NTGYj4J9gqhvmAGKAdL%2FvAzEGJUTzzUhnYHk0oGS6zKNHGSEocoSf%2B2e9t5WZ6Myt5kAF0QXYJesjmMVdGv8Et5QYbop37CVi9UHmveUBfMX%2FDvw%2Bf%2BbS%2BuWlW1XNPCGbAUdYFQ76xFXtfi5csEM7IV3is0rFK6atrcXPSrj6OeLiLsNzRLQIpTMVCI7zlIJFEwK8jnXgIqyBKTnswXqjHBYMsmtPCYltQPVl0foltKpHv%2B%2BTJ8raAjXPv09fPLh78EtO56T48lMaMqSlpwe8xS5c4D%2FPP308PnpbwRGBdyPsPfJ5Htw%2FNlENUNJkhQcBk%2FNRQVf%2Bo9fRV529%2Fjxm3p%2BirQ7daSWwb1qbPvDsg2sT6M3sfeRrZXyYVkCraFZPxbauEKM%2F5Fuurtfw%3D%3D)
- [Live demo of the site on GitHub Pages](https://josecarlosgt.github.io/nz-maori-crafts/)
